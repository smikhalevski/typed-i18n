import {IMessageModule, IMfmlParserOptions, IModuleCompilerOptions} from 'mfml-compiler';

/**
 * An adapter that receives a `files` that were included in the compilation, compiles them with `compileModule` and
 * returns a map from relative file path to a corresponding compile source.
 */
export type Adapter<Options> = (includedFiles: Record<string, string>, moduleCompiler: (messageModule: IMessageModule, onError: (error: unknown, messageName: string) => void) => string, options: Options) => Record<string, string>;

/**
 * The CLI config. By default, this config should be located in `mfml.config.js`.
 */
export interface IConfig extends IMfmlParserOptions, IModuleCompilerOptions {

  /**
   * The path to the compilation adapter.
   *
   * @default `"mfml-cli/lib/adapters/localeFilesAdapter"`
   * @see {@link Adapter}
   */
  adapterPath?: string;

  /**
   * Options passed to an adapter.
   */
  adapterOptions?: any;
}
