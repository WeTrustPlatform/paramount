import React from 'react';
import { ImageBackground, View } from 'react-native';

import { useTheme } from '../../theme';

import { Column } from './Column';
import { Container } from './Container';
import { Row } from './Row';

interface LayoutDebuggerProps {
  showColumnGrid?: boolean;
  showModularGrid?: boolean;
}

export const LayoutDebugger = (props: LayoutDebuggerProps) => {
  const { showColumnGrid = true, showModularGrid = true } = props;

  return (
    <View
      style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
    >
      {showColumnGrid && (
        <View
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <ColumnGrid />
        </View>
      )}
      {showModularGrid && (
        <View
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <ModularGrid />
        </View>
      )}
    </View>
  );
};

const ColumnGrid = () => {
  const {
    layout: { gridColumnCount },
  } = useTheme();

  return (
    <Container style={{ flex: 1 }}>
      <Row style={{ flex: 1 }}>
        {new Array(gridColumnCount).fill(1).map((_, i) => (
          <Column key={i} style={{ flex: 1 }} xsmall={1}>
            <View
              style={{ flex: 1, backgroundColor: 'rgba(250, 227, 223, 0.5)' }}
            />
          </Column>
        ))}
      </Row>
    </Container>
  );
};

const ModularGrid = () => {
  return (
    <>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
        }}
        source={{
          uri:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACKADAAQAAAABAAAACAAAAACVhHtSAAAAHUlEQVQYGWNgwAN+Pr7fwIRHHiw1JBQwgryCzycAXpMGhG5h9OUAAAAASUVORK5CYII=',
          width: 8,
          height: 8,
        }}
        resizeMode="repeat"
      >
        <View style={{ position: 'absolute', width: '100%', height: '100%' }} />
      </ImageBackground>
    </>
  );
};
