declare module 'redux-persist/es/persistStore' {
  import { Store, Action, AnyAction } from 'redux'
  import { PersistorOptions, Persistor } from 'redux-persist/es/types'
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function persistStore<
    S = any,
    A extends Action<any> = AnyAction
  >(
    store: Store<S, A>,
    persistorOptions?: PersistorOptions | null,
    callback?: () => any
  ): Persistor
}

declare module 'redux-persist/lib/persistStore' {
  export * from 'redux-persist/es/persistStore'
  export { default } from 'redux-persist/es/persistStore'
}

// declare module 'redux-persist/integration/react'
declare module 'redux-persist/integration/react' {
  import { ReactNode, PureComponent } from 'react'
  import { Persistor } from 'redux-persist/es/types'

  /** @see PersistGate */
  interface PersistGateProps {
    persistor: Persistor
    onBeforeLift?(): void | Promise<void>
    children?: ReactNode | ((bootstrapped: boolean) => ReactNode)
    loading?: ReactNode
  }

  /** @see PersistGate */
  interface PersistorGateState {
    bootstrapped: boolean
  }

  /**
   * Entry point of your react application to allow it persist a given store @see Persistor and its configuration.
   * @see Persistor
   * @see PersistGateProps
   * @see PersistGateState
   */
  class PersistGate extends PureComponent<
    PersistGateProps,
    PersistorGateState
  > {}
}
