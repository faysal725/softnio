function u(t){const e=new Date(t),n=new Date,c=e.getFullYear();let r=n.getFullYear()-c;const o=n.getMonth(),s=n.getDate(),a=e.getMonth(),h=e.getDate();return(o<a||o===a&&s<h)&&r--,r}function g(t){return Math.floor(t/1e3)}export{u as c,g as m};
