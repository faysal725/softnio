import{al as s,ac as a,A as i}from"./XY3UzohT.js";import{u as f}from"./DpKUsNxY.js";const t=()=>{const o=f();let e=!1;return console.log(o.profileData.profile_completed),o.profileData.profile_completed<80?e=!1:e=!0,e},c=s((o,e)=>{console.log("composable",t());const l=async r=>{await i().$toast.info(r)};if(!t())return l("Please Complete your profile first"),a("/profile")});export{c as default};