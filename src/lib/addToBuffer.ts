

type BufferArgs = {
  eventType: string,
  customParams : {
    click_x: number,
    click_y: number,
  }
}


export const addToBuffer = async (args:BufferArgs) => {
  console.log(args);
  // dispatch to analytics
}
