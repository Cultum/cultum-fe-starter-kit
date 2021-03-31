import * as React from 'react';
// context
import { PersonAPIContext } from '@md-sw-person/layers/api/person';
import { PersonBLContext } from '@md-sw-person/layers/business';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { PersonInfo } from '@md-sw-person/components/person-info';
import { Button } from '@md-modules/shared/components/ui/button';
// views
import {
  ContentWrapper,
  PersonDetailsContainer,
  PersonImgContainer,
  PersonInfoContainer,
  PersonName,
  Wrapper
} from './views';

const PersonPresentation = ({ closeModal }: any) => {
  const { isLoading, person, error } = React.useContext(PersonAPIContext);
  const { personInfo } = React.useContext(PersonBLContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading} error={error}>
          <PersonImgContainer>
            <img src='/static/images/Ben-Kenobi.jpg' alt='Kenobi' />
          </PersonImgContainer>
          <PersonDetailsContainer>
            {person && <PersonName>{person.name}</PersonName>}
            <PersonInfoContainer>
              {personInfo.map((i, idx) => (
                <PersonInfo key={idx} {...i} />
              ))}
              <Button onClick={closeModal}>Close</Button>
            </PersonInfoContainer>
          </PersonDetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { PersonPresentation };
