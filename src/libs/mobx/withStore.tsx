import React from "react";
import { Provider } from "mobx-react";
import { initStore, Store } from "~stores/Store";

interface Props {
  store: Store;
}

export const withStore = Comp =>
  class MobxApp extends React.Component<Props> {
    store: Store;

    constructor(props: Props) {
      super(props);
      this.store = initStore();
    }

    componentDidMount() {
      this.store.onMount();
    }

    componentWillUnmount() {
      this.store.onUnmount();
    }

    render() {
      return (
        <>
          <Provider {...this.store}>
            <Comp {...this.props} />
          </Provider>
        </>
      );
    }
  };
