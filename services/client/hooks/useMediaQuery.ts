import React, { useEffect, useState } from 'react'

import { Dimensions } from 'react-native'

export default function useMediaQuery({ width }) {
    const [matched, setMatched] = useState(false)

    useEffect(() => {
        const subscription:any = Dimensions.addEventListener(
          "change",
          ({ window }) => {

            if(window.width <= width) {
                setMatched(true)
            }

            else{
                setMatched(false)
            }
          }
        );
        return () => subscription?.remove();
      }, []); 

      return matched;
}
