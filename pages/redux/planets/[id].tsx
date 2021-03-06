import * as React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import { PlanetContainer } from '@md-modules/star-wars/redux/planet';
// context
import { AppReduxProvider } from '@md-modules/shared/providers/redux';
// types
import { RootStore } from '@md-store/index';
import { GetServerSidePropsContext } from 'next';
import { ThunkDispatch } from '@md-store/helpers';
// store
import * as API from '@md-store/modules/api';
import { initializeStore } from 'lib/redux/initStore';

interface Props {
  initialReduxState: RootStore;
}

const PlanetPage = ({ initialReduxState }: Props) => (
  <AppReduxProvider initialReduxState={initialReduxState}>
    <MainLayout>
      <PlanetContainer />
    </MainLayout>
  </AppReduxProvider>
);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params?.id) return;

  const id = context.params.id as string;
  const reduxStore = initializeStore();
  const dispatch = reduxStore.dispatch as ThunkDispatch;

  await dispatch(API.planets.getPlanet.performAPIGetPlanet(id));

  return { props: { initialReduxState: reduxStore.getState() } };
}

export default PlanetPage;
