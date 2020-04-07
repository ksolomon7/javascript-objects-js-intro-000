let playlist={
  nellyFurtado: "Promiscous girl",
  drake: "Jungle",
};

function updatePlaylist(playlist, artistName,songTitle){
  return Object.assign({},playlist,{artistName:songTitle});
};
