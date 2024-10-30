#!/bin/bash

MY_DIR="$(dirname $0)"
option=$1

_red_m() {
    echo -e "\033[0;33m> $1:\033[0m\033[1;31m $2 \033[0m"
}

_green_m() {
    echo -e "\033[0;33m> $1:\033[0m\033[1;32m $2 \033[0m"
}

_yellow_m() {
    echo -e "\033[0;32m> $1:\033[0m\033[1;33m $2 \033[0m"
}

_blue_m() {
    echo -e "\033[0;33m> $1:\033[0m\033[1;34m $2 \033[0m"
}

_red() {
    echo -e "\033[1;31m> $1 \033[0m"
}

_green() {
    echo -e "\033[1;32m $1 \033[0m"
}

_yellow() {
    echo -e "\033[0;33m $1 \033[0m"
}

_blue() {
    echo -e "\033[1;34m $1 \033[0m"
}

function help {
    echo ""
    _yellow "############## Help ##############"
    echo ""
    _yellow "$0 { g | d } { section | component | block } {Name}"
    _yellow "g: generate"
    _yellow "d: destroy"
    _yellow "Examples:"
    _yellow_m "Generate a section (TextSection)" "$0 g section Text"
    _yellow_m "Generate a component (Text)" "$0 g component Text"
    _yellow_m "Generate a block (TexBlock)" "$0 g block Text"
    _yellow_m "Destroy a block (TexBlock)" "$0 g block Text"
    echo ""
    exit 1
}

_generate_component() {
    local name="$1"
    local template_path="$MY_DIR/script_templates/component"
    local dest_path="$MY_DIR/../src/views/shared/components/$name"
    local import_path="$MY_DIR/../src/views/shared/components/index.ts"

    if [ -d $dest_path ]; then
        _red "$name already exist"
        exit 1
    fi
    
    cp -r $template_path $dest_path
    mv $dest_path/TemplateComponent.tsx $dest_path/$name.tsx
    mv $dest_path/TemplateComponent.module.scss $dest_path/$name.module.scss
    sed -i '' -e "s/TemplateComponent/$name/g" $dest_path/*

    echo "export * from './$name'" >> $import_path

    _green_m "generated dir" "$dest_path"
    for file in $dest_path/*
    do
        _green_m "generated file" "$file"
    done
    _green_m "edited file" "$import_path"
}

_generate_section() {
    local name="$1"
    local template_path="$MY_DIR/script_templates/section"
    local dest_path="$MY_DIR/../src/views/shared/sections/$name"
    local import_path="$MY_DIR/../src/views/shared/sections/index.ts"

    if [ -d $dest_path ]; then
        _red "$name already exist"
        exit 1
    fi
    
    cp -r $template_path $dest_path
    mv $dest_path/TemplateSection.tsx $dest_path/$name.tsx
    mv $dest_path/TemplateSection.module.scss $dest_path/$name.module.scss
    sed -i '' -e "s/TemplateSection/$name/g" $dest_path/*

    echo "export * from './$name'" >> $import_path

    _green_m "generated dir" "$dest_path"
    for file in $dest_path/*
    do
        _green_m "generated file" "$file"
    done
    _green_m "edited file" "$import_path"
}

_generate_block() {
    local name="$1Block"
    local template_path="$MY_DIR/script_templates/block"
    local dest_path="$MY_DIR/../src/views/shared/blocks/$name"
    local import_path="$MY_DIR/../src/views/shared/blocks/index.ts"

    if [ -d $dest_path ]; then
        _red "$name already exist"
        exit 1
    fi
    
    cp -r $template_path $dest_path
    mv $dest_path/TemplateBlock.tsx $dest_path/$name.tsx
    mv $dest_path/TemplateBlock.module.scss $dest_path/$name.module.scss
    sed -i '' -e "s/TemplateBlock/$name/g" $dest_path/*

    echo "export * from './$name'" >> $import_path

    _green_m "generated dir" "$dest_path"
    for file in $dest_path/*
    do
        _green_m "generated file" "$file"
    done
    _green_m "edited file" "$import_path"
}

__destroy() {
    local type=$1
    local name="$2"
    
    local src_path="$MY_DIR/../src/views/shared/$type/$name"
    local import_path="$MY_DIR/../src/views/shared/$type/index.ts"

    for file in $src_path/*
    do
        _red_m "removed file" "$file"
    done
    _red_m "edited file" "$import_path"

    rm -rf $src_path
    sed -i '' -e "/\.\/$name/d" $import_path   
}

_destroy() {
    local type=$1

    case "$type" in
    "section")
        __destroy "sections" "$2"
        ;;
    "component")
        __destroy "components" "$2Component"
        ;;
    "block")
        __destroy "blocks" "$2Block"
        ;;
    esac
}

_generate() {
    local type=$1

    case "$type" in
    "section")
        _generate_section $2
        ;;
    "component")
        _generate_component $2
    ;;
    "block")
        _generate_block $2
    ;;
    esac
}

case "$option" in
"g")
    _generate $2 $3
    ;;

"d")
    _destroy $2 $3
    ;;
*)
  help
esac
