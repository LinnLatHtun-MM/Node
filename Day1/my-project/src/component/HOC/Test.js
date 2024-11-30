import React from 'react';
import { withBlueBackground } from './HOC';
import { loadingHOC } from './LoadingHOC';

function Test() {

  return (
    <div>
      Test
    </div>
  );
};

//export default Test;

// export default withBlueBackground(Test);

export default loadingHOC(Test);
