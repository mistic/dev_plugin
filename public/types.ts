import { NavigationPublicPluginStart } from '@kbn/navigation-plugin/public';
import { CoreStart } from '@kbn/core-lifecycle-browser';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DevPluginPluginSetup {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DevPluginPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}

export interface KibanaServices extends CoreStart {
  appName: string;
  appBasePath: string;
  startDependencies: AppPluginStartDependencies;
}
