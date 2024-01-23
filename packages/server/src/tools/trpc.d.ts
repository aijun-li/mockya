export declare const router: <TProcRouterRecord extends import('@trpc/server').ProcedureRouterRecord>(
    procedures: TProcRouterRecord,
  ) => import('@trpc/server').CreateRouterInner<
    import('@trpc/server').RootConfig<{
      ctx: object;
      meta: object;
      errorShape: import('@trpc/server').DefaultErrorShape;
      transformer: import('@trpc/server').DefaultDataTransformer;
    }>,
    TProcRouterRecord
  >,
  procedure: import('@trpc/server').ProcedureBuilder<{
    _config: import('@trpc/server').RootConfig<{
      ctx: object;
      meta: object;
      errorShape: import('@trpc/server').DefaultErrorShape;
      transformer: import('@trpc/server').DefaultDataTransformer;
    }>;
    _ctx_out: object;
    _input_in: typeof import('@trpc/server').unsetMarker;
    _input_out: typeof import('@trpc/server').unsetMarker;
    _output_in: typeof import('@trpc/server').unsetMarker;
    _output_out: typeof import('@trpc/server').unsetMarker;
    _meta: object;
  }>,
  mergeRouters: typeof import('@trpc/server').mergeRouters;
