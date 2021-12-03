/** @format */

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) {
        return undefined;
      }
      // if (
      //   new Date().getTime() <
      //   Number(localStorage.getItem("loaded_time")) + 1000 * 10
      // ) {
      //  localStorage.clear();
      // }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      // const loadedTime = JSON.stringify(new Date().getTime());
      localStorage.setItem("state", serializedState);
      // localStorage.setItem("loaded_time", loadedTime);
    } catch (err) {
      //
    }
  };