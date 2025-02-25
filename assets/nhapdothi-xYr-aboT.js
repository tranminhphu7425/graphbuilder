import{v as E}from"./vis-network-wrapper-wtU2UVF3.js";import{r as P}from"./index-Avqs4RfD.js";const q=(N,k,G,D,W)=>{P.useEffect(()=>{let o=null,d=new E.DataSet,r=new E.DataSet;function t(){const x=document.getElementById("nodes").value,I=document.getElementById("edges").value,z=document.getElementById("directed"),A=z?z.checked:1,B=document.getElementById("isWeightedGraph"),L=B?B.checked:0,w=document.getElementById("physics"),h=w?w.checked:1;let S=!!h;const v=parseInt(x)||0,j=I?I.split(`
`):[],C=d.getIds();for(let e=1;e<=v;e++)C.includes(e)||d.add({id:e,label:e.toString(),size:40,font:{size:40,vadjust:-80}});r.clear();const g={};if(j.forEach(e=>{const s=e.split(" "),n=parseInt(s[0]),i=parseInt(s[1]),b=L&&s.length===3?s[2]:null;if(!isNaN(n)&&!isNaN(i)){const y=n===i;if(y){g[n]=(g[n]||0)+1;const p=g[n];if(p>=6&&n<=v){const O=35+(p-5)*5,T=40+(p-5)*5,F=-80-(p-5)*10;d.update({id:n,size:O,font:{size:T,vadjust:F}})}}const R=Math.random()>.5?"curvedCCW":"curvedCW",M=Math.random()*.5+.2,m={from:n,to:i,arrows:A?"to":"",smooth:y?{type:R,roundness:M}:!0,selfReferenceSize:y?20+(g[n]-1)*10:void 0};L&&b!==null&&(m.label=b.toString(),m.font={size:30,align:"horizontal"},m.color={color:"#373b37"}),r.add(m)}}),C.forEach(e=>{if(e>v)try{d.remove({id:e})}catch(s){console.error(`Error removing node ${e}:`,s)}}),o)o.setOptions({edges:{smooth:h?{type:"dynamic",roundness:.5}:{type:"horizontal",roundness:0}},physics:{enabled:S,solver:"forceAtlas2Based",forceAtlas2Based:{springLength:150,springConstant:.02,centralGravity:.005,gravitationalConstant:-80},stabilization:{iterations:200},wind:{x:0,y:0}}});else{const e=document.getElementById("mynetwork"),s={nodes:d,edges:r},n={configure:{enabled:!1},nodes:{shape:"dot",color:"#bdd482",size:40,margin:10,font:{color:"#000000",size:40,vadjust:-80,align:"center"}},edges:{smooth:h?{type:"dynamic",roundness:.5}:{type:"horizontal",roundness:0},selfReferenceSize:20,length:void 0,font:{size:30,align:"horizontal"}},interaction:{dragNodes:!0,hover:!0},physics:{enabled:S,solver:"forceAtlas2Based",forceAtlas2Based:{springLength:150,springConstant:.02,centralGravity:.005,gravitationalConstant:-80},stabilization:{iterations:200},wind:{x:0,y:0}}};o=new E.Network(e,s,n);let i=0;d.on("*",function(){i===0&&(o.fit(),o.moveTo({scale:.7}),i=1)}),r.on("*",function(){i===0&&(o.fit(),o.moveTo({scale:.7}),i=1)})}}t(),document.getElementById("zoomExtendsButton").addEventListener("click",function(){o.fit()});const a=document.getElementById("nodes"),c=document.getElementById("edges"),l=document.getElementById("isWeightedGraph"),u=document.getElementById("directed"),f=document.getElementById("physics");return a&&a.addEventListener("input",t),c&&c.addEventListener("input",t),l&&l.addEventListener("change",t),u&&u.addEventListener("change",t),f&&f.addEventListener("change",t),()=>{a&&a.removeEventListener("input",t),c&&c.removeEventListener("input",t),l&&l.removeEventListener("change",t),u&&u.removeEventListener("change",t),f&&f.removeEventListener("change",t)}},[N,k,G,D,W])};export{q as N};
