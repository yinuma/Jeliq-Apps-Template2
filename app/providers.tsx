import {
  AppContextProvider,
  UIProvider,
  AuthProvider,
  APIClientProvider,
  IframeControllerProvider,
  MessageProvider,
  useMessage,
  useUIContext,
} from "@core";
import type { RoutingConfig, RouteConfig } from "@core";
import { NavigationProvider, useNavigation } from "@router";
import * as dataModels from "@/src/domain/entities/config";
import locales from "@/src/locales";
import * as routings from "@/src/routing/config";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

export default function Providers({
  children,
  routingID,
}: {
  children: React.ReactNode;
  routingID: keyof typeof routings;
}) {
  const routing = routings?.[routingID] as RoutingConfig & {
    routes: RouteConfig[];
  };
  if (!routing) throw new Error(`routingID: ${routingID} is not defined`);

  return (
    <APIClientProvider>
      <AppContextProvider routing={routing} dataModels={dataModels}>
        <MessageProvider>
          <UIProvider locales={locales}>
            <NavigationProvider>
              <IframeControllerProvider>
                <AuthProvider useNavigation={useNavigation}>
                  <MessageToastProvider>{children}</MessageToastProvider>
                </AuthProvider>
              </IframeControllerProvider>
            </NavigationProvider>
          </UIProvider>
        </MessageProvider>
      </AppContextProvider>
    </APIClientProvider>
  );
}

function MessageToastProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const { message } = useMessage([]);
  const { getUILabel } = useUIContext<Record<string, never>>([]);

  useEffect(() => {
    if (message?.error) {
      const errorLabel =
        message.error.code === "999999"
          ? message.error.message
          : getUILabel(message.error.labelKey, message.error.message);

      toast.error(errorLabel, {
        position: "bottom-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [message, getUILabel]);

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
