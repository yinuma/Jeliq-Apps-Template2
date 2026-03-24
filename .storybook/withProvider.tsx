import React from "react";
import { MemoryRouter } from "react-router";
import {
  AppContextProvider,
  UIProvider,
  APIClientProvider,
  AuthProvider,
  IframeControllerProvider,
  PrimitiveWrapper,
  ClickProvider,
} from "@core";
import { NavigationProvider } from "@router";
import locales from "../src/locales";
import * as dataModels from "../src/domain/entities/config";
import * as routings from "../src/routing/config";

export default function withBackendProvider(Story, context) {
  return (
    <MemoryRouter>
      <APIClientProvider>
        <AppContextProvider
          routing={routings?.[Object.keys(routings)?.[0]]}
          dataModels={dataModels}
        >
          <UIProvider locales={locales}>
            <NavigationProvider>
              <IframeControllerProvider>
                <AuthProvider useNavigation={() => null}>
                  <ClickProvider>
                    <PrimitiveWrapper
                      data-selectable4doubleclick="false"
                      data-selectable4singleclick="false"
                      data-testid="rootForWrapper"
                      componentID={["rootForWrapper"]}
                      id="rootForWrapper"
                    >
                      <Story {...context} />
                    </PrimitiveWrapper>
                  </ClickProvider>
                </AuthProvider>
              </IframeControllerProvider>
            </NavigationProvider>
          </UIProvider>
        </AppContextProvider>
      </APIClientProvider>
    </MemoryRouter>
  );
}
