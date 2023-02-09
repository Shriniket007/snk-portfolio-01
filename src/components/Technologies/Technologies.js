import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>i have a knowledge in web development world from backend to frontend</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>front-End</ListTitle>
          <ListParagraph>
            experience with <br />
            React.js 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            experience with <br />
            node.js and Databases 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <DiZend size="3rem" /> */}
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            C++, Python, Java, SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <DiZend size="3rem" /> */}
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MYSQL, Oracle, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
