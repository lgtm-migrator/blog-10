import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { AxiosInstance } from 'axios'
import Vue, { ComponentOptions } from 'vue'
import { Route } from 'vue-router'
import { Translator } from 'vue-translator'
import { Store } from 'vuex'

import { Apollo, AsyncDataFn, RootState } from 'types'
import { translateTitle } from 'utils'

declare global {
  interface Window {
    __INITIAL_STATE__: RootState
    __APOLLO_STATE__: NormalizedCacheObject
  }

  // tslint:disable-next-line variable-name
  const __non_webpack_require__: NodeRequire
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    asyncData?: AsyncDataFn
    title?: string | ((vm: any) => string)
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $apollo: Apollo
    $http: AxiosInstance
    $t: Translator
    $utils: {
      translateTitle: typeof translateTitle
    }
  }
}

declare module 'vue-translator/dist/esm/translator' {
  export interface Translator {
    toggleLocale?(): void
  }
}
