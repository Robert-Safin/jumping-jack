

export type BufferArgs = {
  eventType: string,
  customParams : {
    click_x: number,
    click_y: number,
  }
}

export const handleClickBuffer = async (e: React.MouseEvent<HTMLDivElement>, route_to_steam:boolean) => {
  const data: BufferArgs = {
    eventType: "click",
    customParams: {
      click_x: e.clientX,
      click_y: e.clientY,
    },
  };
  await addToBuffer(data);

  if (route_to_steam) {
    window.location.href =
      "https://store.steampowered.com/app/3205090/Jumping_Jack/";
  }
};


export const addToBuffer = async (args:BufferArgs) => {
  console.log(args);
  // dispatch to analytics
}
