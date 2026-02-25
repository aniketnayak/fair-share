(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _c="170",ns={ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$d=0,tl=1,Kd=2,Nh=1,Oh=2,On=3,hi=0,Je=1,_n=2,oi=0,is=1,el=2,nl=3,il=4,Jd=5,bi=100,Qd=101,tf=102,ef=103,nf=104,sf=200,rf=201,of=202,af=203,la=204,ha=205,cf=206,lf=207,hf=208,uf=209,df=210,ff=211,pf=212,mf=213,gf=214,ua=0,da=1,fa=2,os=3,pa=4,ma=5,ga=6,_a=7,Fh=0,_f=1,vf=2,ai=0,xf=1,yf=2,Sf=3,Bh=4,Mf=5,Ef=6,bf=7,zh=300,as=301,cs=302,va=303,xa=304,Zr=306,ya=1e3,Ti=1001,Sa=1002,xn=1003,wf=1004,ir=1005,Pn=1006,yo=1007,Ai=1008,Wn=1009,kh=1010,Hh=1011,Us=1012,vc=1013,Li=1014,zn=1015,Xs=1016,xc=1017,yc=1018,ls=1020,Gh=35902,Vh=1021,Wh=1022,vn=1023,Xh=1024,qh=1025,ss=1026,hs=1027,Yh=1028,Sc=1029,jh=1030,Mc=1031,Ec=1033,Fr=33776,Br=33777,zr=33778,kr=33779,Ma=35840,Ea=35841,ba=35842,wa=35843,Ta=36196,Aa=37492,Ca=37496,Ra=37808,Pa=37809,La=37810,Da=37811,Ia=37812,Ua=37813,Na=37814,Oa=37815,Fa=37816,Ba=37817,za=37818,ka=37819,Ha=37820,Ga=37821,Hr=36492,Va=36494,Wa=36495,Zh=36283,Xa=36284,qa=36285,Ya=36286,Tf=3200,Af=3201,$h=0,Cf=1,ei="",cn="srgb",ds="srgb-linear",$r="linear",he="srgb",Bi=7680,sl=519,Rf=512,Pf=513,Lf=514,Kh=515,Df=516,If=517,Uf=518,Nf=519,rl=35044,ol="300 es",kn=2e3,Xr=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ds=Math.PI/180,ja=180/Math.PI;function qs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function Of(i,t){return(i%t+t)%t}function So(i,t,e){return(1-e)*i+e*t}function vs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ff={DEG2RAD:Ds};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,r,o,a,c,h){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h)}set(t,e,n,s,r,o,a,c,h){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],d=n[4],f=n[7],p=n[2],_=n[5],x=n[8],y=s[0],m=s[3],u=s[6],b=s[1],M=s[4],S=s[7],U=s[2],P=s[5],R=s[8];return r[0]=o*y+a*b+c*U,r[3]=o*m+a*M+c*P,r[6]=o*u+a*S+c*R,r[1]=h*y+d*b+f*U,r[4]=h*m+d*M+f*P,r[7]=h*u+d*S+f*R,r[2]=p*y+_*b+x*U,r[5]=p*m+_*M+x*P,r[8]=p*u+_*S+x*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],d=t[8];return e*o*d-e*a*h-n*r*d+n*a*c+s*r*h-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],d=t[8],f=d*o-a*h,p=a*c-d*r,_=h*r-o*c,x=e*f+n*p+s*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return t[0]=f*y,t[1]=(s*h-d*n)*y,t[2]=(a*n-s*o)*y,t[3]=p*y,t[4]=(d*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=_*y,t[7]=(n*c-h*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-s*h,s*c,-s*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Mo.makeScale(t,e)),this}rotate(t){return this.premultiply(Mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new qt;function Jh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){const i=qr("canvas");return i.style.display="block",i}const al={};function Ts(i){i in al||(al[i]=!0,console.warn(i))}function zf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function kf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=rs(i.r),i.g=rs(i.g),i.b=rs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?$r:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const cl=[.64,.33,.3,.6,.15,.06],ll=[.2126,.7152,.0722],hl=[.3127,.329],ul=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dl=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[ds]:{primaries:cl,whitePoint:hl,transfer:$r,toXYZ:ul,fromXYZ:dl,luminanceCoefficients:ll,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:cl,whitePoint:hl,transfer:he,toXYZ:ul,fromXYZ:dl,luminanceCoefficients:ll,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}});let zi;class Gf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=qr("canvas")),zi.width=t.width,zi.height=t.height;const n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vf=0;class Qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Eo(s[o].image)):r.push(Eo(s[o]))}else r=Eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wf=0;class nn extends Ni{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=Ti,s=Ti,r=Pn,o=Ai,a=vn,c=Wn,h=nn.DEFAULT_ANISOTROPY,d=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=qs(),this.name="",this.source=new Qh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ya:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ya:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=zh;nn.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,s=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,h=c[0],d=c[4],f=c[8],p=c[1],_=c[5],x=c[9],y=c[2],m=c[6],u=c[10];if(Math.abs(d-p)<.01&&Math.abs(f-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+y)<.1&&Math.abs(x+m)<.1&&Math.abs(h+_+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,S=(_+1)/2,U=(u+1)/2,P=(d+p)/4,R=(f+y)/4,N=(x+m)/4;return M>S&&M>U?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=P/n,r=R/n):S>U?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=P/s,r=N/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=R/r,s=N/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-x)*(m-x)+(f-y)*(f-y)+(p-d)*(p-d));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(f-y)/b,this.z=(p-d)/b,this.w=Math.acos((h+_+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xf extends Ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Xf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class tu extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qf extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ae{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],h=n[s+1],d=n[s+2],f=n[s+3];const p=r[o+0],_=r[o+1],x=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=_,t[e+2]=x,t[e+3]=y;return}if(f!==y||c!==p||h!==_||d!==x){let m=1-a;const u=c*p+h*_+d*x+f*y,b=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const U=Math.sqrt(M),P=Math.atan2(U,u*b);m=Math.sin(m*P)/U,a=Math.sin(a*P)/U}const S=a*b;if(c=c*m+p*S,h=h*m+_*S,d=d*m+x*S,f=f*m+y*S,m===1-a){const U=1/Math.sqrt(c*c+h*h+d*d+f*f);c*=U,h*=U,d*=U,f*=U}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o],p=r[o+1],_=r[o+2],x=r[o+3];return t[e]=a*x+d*f+c*_-h*p,t[e+1]=c*x+d*p+h*f-a*_,t[e+2]=h*x+d*_+a*p-c*f,t[e+3]=d*x-a*f-c*p-h*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),d=a(s/2),f=a(r/2),p=c(n/2),_=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=p*d*f+h*_*x,this._y=h*_*f-p*d*x,this._z=h*d*x+p*_*f,this._w=h*d*f-p*_*x;break;case"YXZ":this._x=p*d*f+h*_*x,this._y=h*_*f-p*d*x,this._z=h*d*x-p*_*f,this._w=h*d*f+p*_*x;break;case"ZXY":this._x=p*d*f-h*_*x,this._y=h*_*f+p*d*x,this._z=h*d*x+p*_*f,this._w=h*d*f-p*_*x;break;case"ZYX":this._x=p*d*f-h*_*x,this._y=h*_*f+p*d*x,this._z=h*d*x-p*_*f,this._w=h*d*f+p*_*x;break;case"YZX":this._x=p*d*f+h*_*x,this._y=h*_*f+p*d*x,this._z=h*d*x-p*_*f,this._w=h*d*f-p*_*x;break;case"XZY":this._x=p*d*f-h*_*x,this._y=h*_*f-p*d*x,this._z=h*d*x+p*_*f,this._w=h*d*f+p*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],d=e[6],f=e[10],p=n+a+f;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(d-c)*_,this._y=(r-h)*_,this._z=(o-s)*_}else if(n>a&&n>f){const _=2*Math.sqrt(1+n-a-f);this._w=(d-c)/_,this._x=.25*_,this._y=(s+o)/_,this._z=(r+h)/_}else if(a>f){const _=2*Math.sqrt(1+a-n-f);this._w=(r-h)/_,this._x=(s+o)/_,this._y=.25*_,this._z=(c+d)/_}else{const _=2*Math.sqrt(1+f-n-a);this._w=(o-s)/_,this._x=(r+h)/_,this._y=(c+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+o*a+s*h-r*c,this._y=s*d+o*c+r*a-n*h,this._z=r*d+o*h+n*c-s*a,this._w=o*d-n*a-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const _=1-e;return this._w=_*o+e*this._w,this._x=_*n+e*this._x,this._y=_*s+e*this._y,this._z=_*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),d=Math.atan2(h,a),f=Math.sin((1-e)*d)/h,p=Math.sin(e*d)/h;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*s-a*n),d=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*h+o*f-a*d,this.y=n+c*d+a*h-r*f,this.z=s+c*f+r*d-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bo.copy(this).projectOnVector(t),this.sub(bo)}reflect(t){return this.sub(bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new I,fl=new Ae;class Ys{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),rr.subVectors(this.max,xs),ki.subVectors(t.a,xs),Hi.subVectors(t.b,xs),Gi.subVectors(t.c,xs),jn.subVectors(Hi,ki),Zn.subVectors(Gi,Hi),mi.subVectors(ki,Gi);let e=[0,-jn.z,jn.y,0,-Zn.z,Zn.y,0,-mi.z,mi.y,jn.z,0,-jn.x,Zn.z,0,-Zn.x,mi.z,0,-mi.x,-jn.y,jn.x,0,-Zn.y,Zn.x,0,-mi.y,mi.x,0];return!wo(e,ki,Hi,Gi,rr)||(e=[1,0,0,0,1,0,0,0,1],!wo(e,ki,Hi,Gi,rr))?!1:(or.crossVectors(jn,Zn),e=[or.x,or.y,or.z],wo(e,ki,Hi,Gi,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new I,new I,new I,new I,new I,new I,new I,new I],pn=new I,sr=new Ys,ki=new I,Hi=new I,Gi=new I,jn=new I,Zn=new I,mi=new I,xs=new I,rr=new I,or=new I,gi=new I;function wo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),h=e.dot(gi),d=n.dot(gi);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>a)return!1}return!0}const Yf=new Ys,ys=new I,To=new I;class Kr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);const e=ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(To)),this.expandByPoint(ys.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new I,Ao=new I,ar=new I,$n=new I,Co=new I,cr=new I,Ro=new I;class Jr{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ao.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Ao);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ar),a=$n.dot(this.direction),c=-$n.dot(ar),h=$n.lengthSq(),d=Math.abs(1-o*o);let f,p,_,x;if(d>0)if(f=o*c-a,p=o*a-c,x=r*d,f>=0)if(p>=-x)if(p<=x){const y=1/d;f*=y,p*=y,_=f*(f+o*p+2*a)+p*(o*f+p+2*c)+h}else p=r,f=Math.max(0,-(o*p+a)),_=-f*f+p*(p+2*c)+h;else p=-r,f=Math.max(0,-(o*p+a)),_=-f*f+p*(p+2*c)+h;else p<=-x?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-c),r),_=-f*f+p*(p+2*c)+h):p<=x?(f=0,p=Math.min(Math.max(-r,-c),r),_=p*(p+2*c)+h):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-c),r),_=-f*f+p*(p+2*c)+h);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),_=-f*f+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ao).addScaledVector(ar,p),_}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),d>=0?(r=(t.min.y-p.y)*d,o=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,o=(t.min.y-p.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){Co.subVectors(e,t),cr.subVectors(n,t),Ro.crossVectors(Co,cr);let o=this.direction.dot(Ro),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);const c=a*this.direction.dot(cr.crossVectors($n,cr));if(c<0)return null;const h=a*this.direction.dot(Co.cross($n));if(h<0||c+h>o)return null;const d=-a*$n.dot(Ro);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,r,o,a,c,h,d,f,p,_,x,y,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h,d,f,p,_,x,y,m)}set(t,e,n,s,r,o,a,c,h,d,f,p,_,x,y,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=h,u[6]=d,u[10]=f,u[14]=p,u[3]=_,u[7]=x,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const p=o*d,_=o*f,x=a*d,y=a*f;e[0]=c*d,e[4]=-c*f,e[8]=h,e[1]=_+x*h,e[5]=p-y*h,e[9]=-a*c,e[2]=y-p*h,e[6]=x+_*h,e[10]=o*c}else if(t.order==="YXZ"){const p=c*d,_=c*f,x=h*d,y=h*f;e[0]=p+y*a,e[4]=x*a-_,e[8]=o*h,e[1]=o*f,e[5]=o*d,e[9]=-a,e[2]=_*a-x,e[6]=y+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*d,_=c*f,x=h*d,y=h*f;e[0]=p-y*a,e[4]=-o*f,e[8]=x+_*a,e[1]=_+x*a,e[5]=o*d,e[9]=y-p*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*d,_=o*f,x=a*d,y=a*f;e[0]=c*d,e[4]=x*h-_,e[8]=p*h+y,e[1]=c*f,e[5]=y*h+p,e[9]=_*h-x,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,_=o*h,x=a*c,y=a*h;e[0]=c*d,e[4]=y-p*f,e[8]=x*f+_,e[1]=f,e[5]=o*d,e[9]=-a*d,e[2]=-h*d,e[6]=_*f+x,e[10]=p-y*f}else if(t.order==="XZY"){const p=o*c,_=o*h,x=a*c,y=a*h;e[0]=c*d,e[4]=-f,e[8]=h*d,e[1]=p*f+y,e[5]=o*d,e[9]=_*f-x,e[2]=x*f-_,e[6]=a*d,e[10]=y*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jf,t,Zf)}lookAt(t,e,n){const s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Kn.crossVectors(n,rn),Kn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Kn.crossVectors(n,rn)),Kn.normalize(),lr.crossVectors(rn,Kn),s[0]=Kn.x,s[4]=lr.x,s[8]=rn.x,s[1]=Kn.y,s[5]=lr.y,s[9]=rn.y,s[2]=Kn.z,s[6]=lr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],d=n[1],f=n[5],p=n[9],_=n[13],x=n[2],y=n[6],m=n[10],u=n[14],b=n[3],M=n[7],S=n[11],U=n[15],P=s[0],R=s[4],N=s[8],T=s[12],E=s[1],O=s[5],H=s[9],G=s[13],Y=s[2],Z=s[6],j=s[10],Q=s[14],X=s[3],rt=s[7],pt=s[11],lt=s[15];return r[0]=o*P+a*E+c*Y+h*X,r[4]=o*R+a*O+c*Z+h*rt,r[8]=o*N+a*H+c*j+h*pt,r[12]=o*T+a*G+c*Q+h*lt,r[1]=d*P+f*E+p*Y+_*X,r[5]=d*R+f*O+p*Z+_*rt,r[9]=d*N+f*H+p*j+_*pt,r[13]=d*T+f*G+p*Q+_*lt,r[2]=x*P+y*E+m*Y+u*X,r[6]=x*R+y*O+m*Z+u*rt,r[10]=x*N+y*H+m*j+u*pt,r[14]=x*T+y*G+m*Q+u*lt,r[3]=b*P+M*E+S*Y+U*X,r[7]=b*R+M*O+S*Z+U*rt,r[11]=b*N+M*H+S*j+U*pt,r[15]=b*T+M*G+S*Q+U*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],d=t[2],f=t[6],p=t[10],_=t[14],x=t[3],y=t[7],m=t[11],u=t[15];return x*(+r*c*f-s*h*f-r*a*p+n*h*p+s*a*_-n*c*_)+y*(+e*c*_-e*h*p+r*o*p-s*o*_+s*h*d-r*c*d)+m*(+e*h*f-e*a*_-r*o*f+n*o*_+r*a*d-n*h*d)+u*(-s*a*d-e*c*f+e*a*p+s*o*f-n*o*p+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],d=t[8],f=t[9],p=t[10],_=t[11],x=t[12],y=t[13],m=t[14],u=t[15],b=f*m*h-y*p*h+y*c*_-a*m*_-f*c*u+a*p*u,M=x*p*h-d*m*h-x*c*_+o*m*_+d*c*u-o*p*u,S=d*y*h-x*f*h+x*a*_-o*y*_-d*a*u+o*f*u,U=x*f*c-d*y*c-x*a*p+o*y*p+d*a*m-o*f*m,P=e*b+n*M+s*S+r*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return t[0]=b*R,t[1]=(y*p*r-f*m*r-y*s*_+n*m*_+f*s*u-n*p*u)*R,t[2]=(a*m*r-y*c*r+y*s*h-n*m*h-a*s*u+n*c*u)*R,t[3]=(f*c*r-a*p*r-f*s*h+n*p*h+a*s*_-n*c*_)*R,t[4]=M*R,t[5]=(d*m*r-x*p*r+x*s*_-e*m*_-d*s*u+e*p*u)*R,t[6]=(x*c*r-o*m*r-x*s*h+e*m*h+o*s*u-e*c*u)*R,t[7]=(o*p*r-d*c*r+d*s*h-e*p*h-o*s*_+e*c*_)*R,t[8]=S*R,t[9]=(x*f*r-d*y*r-x*n*_+e*y*_+d*n*u-e*f*u)*R,t[10]=(o*y*r-x*a*r+x*n*h-e*y*h-o*n*u+e*a*u)*R,t[11]=(d*a*r-o*f*r-d*n*h+e*f*h+o*n*_-e*a*_)*R,t[12]=U*R,t[13]=(d*y*s-x*f*s+x*n*p-e*y*p-d*n*m+e*f*m)*R,t[14]=(x*a*s-o*y*s-x*n*c+e*y*c+o*n*m-e*a*m)*R,t[15]=(o*f*s-d*a*s+d*n*c-e*f*c-o*n*p+e*a*p)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,d=r*a;return this.set(h*o+n,h*a-s*c,h*c+s*a,0,h*a+s*c,d*a+n,d*c-s*o,0,h*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,d=o+o,f=a+a,p=r*h,_=r*d,x=r*f,y=o*d,m=o*f,u=a*f,b=c*h,M=c*d,S=c*f,U=n.x,P=n.y,R=n.z;return s[0]=(1-(y+u))*U,s[1]=(_+S)*U,s[2]=(x-M)*U,s[3]=0,s[4]=(_-S)*P,s[5]=(1-(p+u))*P,s[6]=(m+b)*P,s[7]=0,s[8]=(x+M)*R,s[9]=(m-b)*R,s[10]=(1-(p+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Vi.set(s[0],s[1],s[2]).length();const o=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);const h=1/r,d=1/o,f=1/a;return mn.elements[0]*=h,mn.elements[1]*=h,mn.elements[2]*=h,mn.elements[4]*=d,mn.elements[5]*=d,mn.elements[6]*=d,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,e.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=kn){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s);let _,x;if(a===kn)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Xr)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn){const c=this.elements,h=1/(e-t),d=1/(n-s),f=1/(o-r),p=(e+t)*h,_=(n+s)*d;let x,y;if(a===kn)x=(o+r)*f,y=-2*f;else if(a===Xr)x=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vi=new I,mn=new fe,jf=new I(0,0,0),Zf=new I(1,1,1),Kn=new I,lr=new I,rn=new I,pl=new fe,ml=new Ae;class Mn{constructor(t=0,e=0,n=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],h=s[5],d=s[9],f=s[2],p=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ml.setFromEuler(this),this.setFromQuaternion(ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $f=0;const gl=new I,Wi=new Ae,In=new fe,hr=new I,Ss=new I,Kf=new I,Jf=new Ae,_l=new I(1,0,0),vl=new I(0,1,0),xl=new I(0,0,1),yl={type:"added"},Qf={type:"removed"},Xi={type:"childadded",child:null},Po={type:"childremoved",child:null};class Le extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new I,e=new Mn,n=new Ae,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new qt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(_l,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(xl,t)}translateOnAxis(t,e){return gl.copy(t).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_l,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Ss,hr,this.up):In.lookAt(hr,Ss,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(In),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qf),Po.child=t,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,Kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const f=c[h];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),h=o(t.textures),d=o(t.images),f=o(t.shapes),p=o(t.skeletons),_=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const c=[];for(const h in a){const d=a[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Le.DEFAULT_UP=new I(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new I,Un=new I,Lo=new I,Nn=new I,qi=new I,Yi=new I,Sl=new I,Do=new I,Io=new I,Uo=new I,No=new we,Oo=new we,Fo=new we;class hn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Un.subVectors(n,e),Lo.subVectors(t,e);const o=gn.dot(gn),a=gn.dot(Un),c=gn.dot(Lo),h=Un.dot(Un),d=Un.dot(Lo),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;const p=1/f,_=(h*c-a*d)*p,x=(o*d-a*c)*p;return r.set(1-_-x,x,_)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(o,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return No.setScalar(0),Oo.setScalar(0),Fo.setScalar(0),No.fromBufferAttribute(t,e),Oo.fromBufferAttribute(t,n),Fo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(No,r.x),o.addScaledVector(Oo,r.y),o.addScaledVector(Fo,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Un.subVectors(t,e),gn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),gn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;qi.subVectors(s,n),Yi.subVectors(r,n),Do.subVectors(t,n);const c=qi.dot(Do),h=Yi.dot(Do);if(c<=0&&h<=0)return e.copy(n);Io.subVectors(t,s);const d=qi.dot(Io),f=Yi.dot(Io);if(d>=0&&f<=d)return e.copy(s);const p=c*f-d*h;if(p<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(qi,o);Uo.subVectors(t,r);const _=qi.dot(Uo),x=Yi.dot(Uo);if(x>=0&&_<=x)return e.copy(r);const y=_*h-c*x;if(y<=0&&h>=0&&x<=0)return a=h/(h-x),e.copy(n).addScaledVector(Yi,a);const m=d*x-_*f;if(m<=0&&f-d>=0&&_-x>=0)return Sl.subVectors(r,s),a=(f-d)/(f-d+(_-x)),e.copy(s).addScaledVector(Sl,a);const u=1/(m+y+p);return o=y*u,a=p*u,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Of(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Bo(o,r,t+1/3),this.g=Bo(o,r,t),this.b=Bo(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return ee.fromWorkingColorSpace(We.copy(this),t),Math.round($e(We.r*255,0,255))*65536+Math.round($e(We.g*255,0,255))*256+Math.round($e(We.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,h;const d=(a+o)/2;if(a===o)c=0,h=0;else{const f=o-a;switch(h=d<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=cn){ee.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(ur);const n=So(Jn.h,ur.h,e),s=So(Jn.s,ur.s,e),r=So(Jn.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Jt;Jt.NAMES=eu;let tp=0;class fs extends Ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=qs(),this.name="",this.blending=is,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ha,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class js extends fs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new I,dr=new Bt;class yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rl&&(t.usage=this.usage),t}}class nu extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class iu extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ep=0;const an=new fe,zo=new Le,ji=new I,on=new Ys,Ms=new Ys,Be=new I;class He extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jh(t)?iu:nu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return zo.lookAt(t),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(on.min,Ms.min),on.expandByPoint(Be),Be.addVectors(on.max,Ms.max),on.expandByPoint(Be)):(on.expandByPoint(Ms.min),on.expandByPoint(Ms.max))}on.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)Be.fromBufferAttribute(a,h),c&&(ji.fromBufferAttribute(t,h),Be.add(ji)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new I,c[N]=new I;const h=new I,d=new I,f=new I,p=new Bt,_=new Bt,x=new Bt,y=new I,m=new I;function u(N,T,E){h.fromBufferAttribute(n,N),d.fromBufferAttribute(n,T),f.fromBufferAttribute(n,E),p.fromBufferAttribute(r,N),_.fromBufferAttribute(r,T),x.fromBufferAttribute(r,E),d.sub(h),f.sub(h),_.sub(p),x.sub(p);const O=1/(_.x*x.y-x.x*_.y);isFinite(O)&&(y.copy(d).multiplyScalar(x.y).addScaledVector(f,-_.y).multiplyScalar(O),m.copy(f).multiplyScalar(_.x).addScaledVector(d,-x.x).multiplyScalar(O),a[N].add(y),a[T].add(y),a[E].add(y),c[N].add(m),c[T].add(m),c[E].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let N=0,T=b.length;N<T;++N){const E=b[N],O=E.start,H=E.count;for(let G=O,Y=O+H;G<Y;G+=3)u(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const M=new I,S=new I,U=new I,P=new I;function R(N){U.fromBufferAttribute(s,N),P.copy(U);const T=a[N];M.copy(T),M.sub(U.multiplyScalar(U.dot(T))).normalize(),S.crossVectors(P,T);const O=S.dot(c[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,O)}for(let N=0,T=b.length;N<T;++N){const E=b[N],O=E.start,H=E.count;for(let G=O,Y=O+H;G<Y;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,_=n.count;p<_;p++)n.setXYZ(p,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,h=new I,d=new I,f=new I;if(t)for(let p=0,_=t.count;p<_;p+=3){const x=t.getX(p+0),y=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,m),a.add(d),c.add(d),h.add(d),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let p=0,_=e.count;p<_;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){const h=a.array,d=a.itemSize,f=a.normalized,p=new h.constructor(c.length*d);let _=0,x=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?_=c[y]*a.data.stride+a.offset:_=c[y]*d;for(let u=0;u<d;u++)p[x++]=h[_++]}return new yn(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],h=t(c,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const c=[],h=r[a];for(let d=0,f=h.length;d<f;d++){const p=h[d],_=t(p,n);c.push(_)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let f=0,p=h.length;f<p;f++){const _=h[f];d.push(_.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(e))}const r=t.morphAttributes;for(const h in r){const d=[],f=r[h];for(let p=0,_=f.length;p<_;p++)d.push(f[p].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,d=o.length;h<d;h++){const f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ml=new fe,_i=new Jr,fr=new Kr,El=new I,pr=new I,mr=new I,gr=new I,ko=new I,_r=new I,bl=new I,vr=new I;class at extends Le{constructor(t=new He,e=new js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){_r.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const d=a[c],f=r[c];d!==0&&(ko.fromBufferAttribute(f,t),o?_r.addScaledVector(ko,d):_r.addScaledVector(ko.sub(e),d))}e.add(_r)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(fr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(fr,El)===null||_i.origin.distanceToSquared(El)>(t.far-t.near)**2))&&(Ml.copy(r).invert(),_i.copy(t.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const m=p[x],u=o[m.materialIndex],b=Math.max(m.start,_.start),M=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let S=b,U=M;S<U;S+=3){const P=a.getX(S),R=a.getX(S+1),N=a.getX(S+2);s=xr(this,u,t,n,h,d,f,P,R,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,_.start),y=Math.min(a.count,_.start+_.count);for(let m=x,u=y;m<u;m+=3){const b=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);s=xr(this,o,t,n,h,d,f,b,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const m=p[x],u=o[m.materialIndex],b=Math.max(m.start,_.start),M=Math.min(c.count,Math.min(m.start+m.count,_.start+_.count));for(let S=b,U=M;S<U;S+=3){const P=S,R=S+1,N=S+2;s=xr(this,u,t,n,h,d,f,P,R,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,_.start),y=Math.min(c.count,_.start+_.count);for(let m=x,u=y;m<u;m+=3){const b=m,M=m+1,S=m+2;s=xr(this,o,t,n,h,d,f,b,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function np(i,t,e,n,s,r,o,a){let c;if(t.side===Je?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===hi,a),c===null)return null;vr.copy(a),vr.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(vr);return h<e.near||h>e.far?null:{distance:h,point:vr.clone(),object:i}}function xr(i,t,e,n,s,r,o,a,c,h){i.getVertexPosition(a,pr),i.getVertexPosition(c,mr),i.getVertexPosition(h,gr);const d=np(i,t,e,n,pr,mr,gr,bl);if(d){const f=new I;hn.getBarycoord(bl,pr,mr,gr,f),s&&(d.uv=hn.getInterpolatedAttribute(s,a,c,h,f,new Bt)),r&&(d.uv1=hn.getInterpolatedAttribute(r,a,c,h,f,new Bt)),o&&(d.normal=hn.getInterpolatedAttribute(o,a,c,h,f,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:c,c:h,normal:new I,materialIndex:0};hn.getNormal(pr,mr,gr,p.normal),d.face=p,d.barycoord=f}return d}class ge extends He{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],h=[],d=[],f=[];let p=0,_=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function x(y,m,u,b,M,S,U,P,R,N,T){const E=S/R,O=U/N,H=S/2,G=U/2,Y=P/2,Z=R+1,j=N+1;let Q=0,X=0;const rt=new I;for(let pt=0;pt<j;pt++){const lt=pt*O-G;for(let Et=0;Et<Z;Et++){const zt=Et*E-H;rt[y]=zt*b,rt[m]=lt*M,rt[u]=Y,h.push(rt.x,rt.y,rt.z),rt[y]=0,rt[m]=0,rt[u]=P>0?1:-1,d.push(rt.x,rt.y,rt.z),f.push(Et/R),f.push(1-pt/N),Q+=1}}for(let pt=0;pt<N;pt++)for(let lt=0;lt<R;lt++){const Et=p+lt+Z*pt,zt=p+lt+Z*(pt+1),K=p+(lt+1)+Z*(pt+1),et=p+(lt+1)+Z*pt;c.push(Et,zt,et),c.push(zt,K,et),X+=6}a.addGroup(_,X,T),_+=X,p+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=us(i[e]);for(const s in n)t[s]=n[s]}return t}function ip(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function su(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const sp={clone:us,merge:Ze};var rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends fs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ru extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new I,wl=new Bt,Tl=new Bt;class ln extends ru{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,wl,Tl),e.subVectors(Tl,wl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/h,s*=o.width/c,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,$i=1;class ap extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Zi,$i,t,e);s.layers=this.layers,this.add(s);const r=new ln(Zi,$i,t,e);r.layers=this.layers,this.add(r);const o=new ln(Zi,$i,t,e);o.layers=this.layers,this.add(o);const a=new ln(Zi,$i,t,e);a.layers=this.layers,this.add(a);const c=new ln(Zi,$i,t,e);c.layers=this.layers,this.add(c);const h=new ln(Zi,$i,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const h of e)this.remove(h);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,h,d]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(f,p,_),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ou extends nn{constructor(t,e,n,s,r,o,a,c,h,d){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,s,r,o,a,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cp extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ou(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ge(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:oi});r.uniforms.tEquirect.value=e;const o=new at(s,r),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=Pn),new ap(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Ho=new I,lp=new I,hp=new qt;class Bn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ho.subVectors(n,e).cross(lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ho),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hp.getNormalMatrix(t),s=this.coplanarPoint(Ho).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Kr,yr=new I;class wc{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],h=s[4],d=s[5],f=s[6],p=s[7],_=s[8],x=s[9],y=s[10],m=s[11],u=s[12],b=s[13],M=s[14],S=s[15];if(n[0].setComponents(c-r,p-h,m-_,S-u).normalize(),n[1].setComponents(c+r,p+h,m+_,S+u).normalize(),n[2].setComponents(c+o,p+d,m+x,S+b).normalize(),n[3].setComponents(c-o,p-d,m-x,S-b).normalize(),n[4].setComponents(c-a,p-f,m-y,S-M).normalize(),e===kn)n[5].setComponents(c+a,p+f,m+y,S+M).normalize();else if(e===Xr)n[5].setComponents(a,f,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(yr.x=s.normal.x>0?t.max.x:t.min.x,yr.y=s.normal.y>0?t.max.y:t.min.y,yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function au(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function up(i){const t=new WeakMap;function e(a,c){const h=a.array,d=a.usage,f=h.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,h,d),a.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,h){const d=c.array,f=c.updateRanges;if(i.bindBuffer(h,a),f.length===0)i.bufferSubData(h,0,d);else{f.sort((_,x)=>_.start-x.start);let p=0;for(let _=1;_<f.length;_++){const x=f[p],y=f[_];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++p,f[p]=y)}f.length=p+1;for(let _=0,x=f.length;_<x;_++){const y=f[_];i.bufferSubData(h,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:o}}class Vn extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),h=a+1,d=c+1,f=t/a,p=e/c,_=[],x=[],y=[],m=[];for(let u=0;u<d;u++){const b=u*p-o;for(let M=0;M<h;M++){const S=M*f-r;x.push(S,-b,0),y.push(0,0,1),m.push(M/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<a;b++){const M=b+h*u,S=b+h*(u+1),U=b+1+h*(u+1),P=b+1+h*u;_.push(M,S,P),_.push(S,U,P)}this.setIndex(_),this.setAttribute("position",new Me(x,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.width,t.height,t.widthSegments,t.heightSegments)}}var dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Np=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,um=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$m=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,og=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ig=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Og=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:dp,alphahash_pars_fragment:fp,alphamap_fragment:pp,alphamap_pars_fragment:mp,alphatest_fragment:gp,alphatest_pars_fragment:_p,aomap_fragment:vp,aomap_pars_fragment:xp,batching_pars_vertex:yp,batching_vertex:Sp,begin_vertex:Mp,beginnormal_vertex:Ep,bsdfs:bp,iridescence_fragment:wp,bumpmap_pars_fragment:Tp,clipping_planes_fragment:Ap,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Rp,clipping_planes_vertex:Pp,color_fragment:Lp,color_pars_fragment:Dp,color_pars_vertex:Ip,color_vertex:Up,common:Np,cube_uv_reflection_fragment:Op,defaultnormal_vertex:Fp,displacementmap_pars_vertex:Bp,displacementmap_vertex:zp,emissivemap_fragment:kp,emissivemap_pars_fragment:Hp,colorspace_fragment:Gp,colorspace_pars_fragment:Vp,envmap_fragment:Wp,envmap_common_pars_fragment:Xp,envmap_pars_fragment:qp,envmap_pars_vertex:Yp,envmap_physical_pars_fragment:sm,envmap_vertex:jp,fog_vertex:Zp,fog_pars_vertex:$p,fog_fragment:Kp,fog_pars_fragment:Jp,gradientmap_pars_fragment:Qp,lightmap_pars_fragment:tm,lights_lambert_fragment:em,lights_lambert_pars_fragment:nm,lights_pars_begin:im,lights_toon_fragment:rm,lights_toon_pars_fragment:om,lights_phong_fragment:am,lights_phong_pars_fragment:cm,lights_physical_fragment:lm,lights_physical_pars_fragment:hm,lights_fragment_begin:um,lights_fragment_maps:dm,lights_fragment_end:fm,logdepthbuf_fragment:pm,logdepthbuf_pars_fragment:mm,logdepthbuf_pars_vertex:gm,logdepthbuf_vertex:_m,map_fragment:vm,map_pars_fragment:xm,map_particle_fragment:ym,map_particle_pars_fragment:Sm,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:Em,morphinstance_vertex:bm,morphcolor_vertex:wm,morphnormal_vertex:Tm,morphtarget_pars_vertex:Am,morphtarget_vertex:Cm,normal_fragment_begin:Rm,normal_fragment_maps:Pm,normal_pars_fragment:Lm,normal_pars_vertex:Dm,normal_vertex:Im,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Bm,opaque_fragment:zm,packing:km,premultiplied_alpha_fragment:Hm,project_vertex:Gm,dithering_fragment:Vm,dithering_pars_fragment:Wm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:qm,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:jm,shadowmap_vertex:Zm,shadowmask_pars_fragment:$m,skinbase_vertex:Km,skinning_pars_vertex:Jm,skinning_vertex:Qm,skinnormal_vertex:tg,specularmap_fragment:eg,specularmap_pars_fragment:ng,tonemapping_fragment:ig,tonemapping_pars_fragment:sg,transmission_fragment:rg,transmission_pars_fragment:og,uv_pars_fragment:ag,uv_pars_vertex:cg,uv_vertex:lg,worldpos_vertex:hg,background_vert:ug,background_frag:dg,backgroundCube_vert:fg,backgroundCube_frag:pg,cube_vert:mg,cube_frag:gg,depth_vert:_g,depth_frag:vg,distanceRGBA_vert:xg,distanceRGBA_frag:yg,equirect_vert:Sg,equirect_frag:Mg,linedashed_vert:Eg,linedashed_frag:bg,meshbasic_vert:wg,meshbasic_frag:Tg,meshlambert_vert:Ag,meshlambert_frag:Cg,meshmatcap_vert:Rg,meshmatcap_frag:Pg,meshnormal_vert:Lg,meshnormal_frag:Dg,meshphong_vert:Ig,meshphong_frag:Ug,meshphysical_vert:Ng,meshphysical_frag:Og,meshtoon_vert:Fg,meshtoon_frag:Bg,points_vert:zg,points_frag:kg,shadow_vert:Hg,shadow_frag:Gg,sprite_vert:Vg,sprite_frag:Wg},mt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Rn={basic:{uniforms:Ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ze([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ze([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ze([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ze([mt.points,mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ze([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ze([mt.common,mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ze([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ze([mt.sprite,mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ze([mt.common,mt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ze([mt.lights,mt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Rn.physical={uniforms:Ze([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Sr={r:0,b:0,g:0},xi=new Mn,Xg=new fe;function qg(i,t,e,n,s,r,o){const a=new Jt(0);let c=r===!0?0:1,h,d,f=null,p=0,_=null;function x(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function y(b){let M=!1;const S=x(b);S===null?u(a,c):S&&S.isColor&&(u(S,1),M=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){const S=x(M);S&&(S.isCubeTexture||S.mapping===Zr)?(d===void 0&&(d=new at(new ge(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:us(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),xi.copy(M.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(xi)),d.material.toneMapped=ee.getTransfer(S.colorSpace)!==he,(f!==S||p!==S.version||_!==i.toneMapping)&&(d.material.needsUpdate=!0,f=S,p=S.version,_=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new at(new Vn(2,2),new Xn({name:"BackgroundMaterial",uniforms:us(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=ee.getTransfer(S.colorSpace)!==he,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,f=S,p=S.version,_=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function u(b,M){b.getRGB(Sr,su(i)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,u(a,c)},render:y,addToRenderList:m}}function Yg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(E,O,H,G,Y){let Z=!1;const j=f(G,H,O);r!==j&&(r=j,h(r.object)),Z=_(E,G,H,Y),Z&&x(E,G,H,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(E,O,H,G),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function h(E){return i.bindVertexArray(E)}function d(E){return i.deleteVertexArray(E)}function f(E,O,H){const G=H.wireframe===!0;let Y=n[E.id];Y===void 0&&(Y={},n[E.id]=Y);let Z=Y[O.id];Z===void 0&&(Z={},Y[O.id]=Z);let j=Z[G];return j===void 0&&(j=p(c()),Z[G]=j),j}function p(E){const O=[],H=[],G=[];for(let Y=0;Y<e;Y++)O[Y]=0,H[Y]=0,G[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:G,object:E,attributes:{},index:null}}function _(E,O,H,G){const Y=r.attributes,Z=O.attributes;let j=0;const Q=H.getAttributes();for(const X in Q)if(Q[X].location>=0){const pt=Y[X];let lt=Z[X];if(lt===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(lt=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(lt=E.instanceColor)),pt===void 0||pt.attribute!==lt||lt&&pt.data!==lt.data)return!0;j++}return r.attributesNum!==j||r.index!==G}function x(E,O,H,G){const Y={},Z=O.attributes;let j=0;const Q=H.getAttributes();for(const X in Q)if(Q[X].location>=0){let pt=Z[X];pt===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(pt=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(pt=E.instanceColor));const lt={};lt.attribute=pt,pt&&pt.data&&(lt.data=pt.data),Y[X]=lt,j++}r.attributes=Y,r.attributesNum=j,r.index=G}function y(){const E=r.newAttributes;for(let O=0,H=E.length;O<H;O++)E[O]=0}function m(E){u(E,0)}function u(E,O){const H=r.newAttributes,G=r.enabledAttributes,Y=r.attributeDivisors;H[E]=1,G[E]===0&&(i.enableVertexAttribArray(E),G[E]=1),Y[E]!==O&&(i.vertexAttribDivisor(E,O),Y[E]=O)}function b(){const E=r.newAttributes,O=r.enabledAttributes;for(let H=0,G=O.length;H<G;H++)O[H]!==E[H]&&(i.disableVertexAttribArray(H),O[H]=0)}function M(E,O,H,G,Y,Z,j){j===!0?i.vertexAttribIPointer(E,O,H,Y,Z):i.vertexAttribPointer(E,O,H,G,Y,Z)}function S(E,O,H,G){y();const Y=G.attributes,Z=H.getAttributes(),j=O.defaultAttributeValues;for(const Q in Z){const X=Z[Q];if(X.location>=0){let rt=Y[Q];if(rt===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(rt=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(rt=E.instanceColor)),rt!==void 0){const pt=rt.normalized,lt=rt.itemSize,Et=t.get(rt);if(Et===void 0)continue;const zt=Et.buffer,K=Et.type,et=Et.bytesPerElement,ot=K===i.INT||K===i.UNSIGNED_INT||rt.gpuType===vc;if(rt.isInterleavedBufferAttribute){const ut=rt.data,bt=ut.stride,wt=rt.offset;if(ut.isInstancedInterleavedBuffer){for(let Dt=0;Dt<X.locationSize;Dt++)u(X.location+Dt,ut.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Dt=0;Dt<X.locationSize;Dt++)m(X.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Dt=0;Dt<X.locationSize;Dt++)M(X.location+Dt,lt/X.locationSize,K,pt,bt*et,(wt+lt/X.locationSize*Dt)*et,ot)}else{if(rt.isInstancedBufferAttribute){for(let ut=0;ut<X.locationSize;ut++)u(X.location+ut,rt.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ut=0;ut<X.locationSize;ut++)m(X.location+ut);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let ut=0;ut<X.locationSize;ut++)M(X.location+ut,lt/X.locationSize,K,pt,lt*et,lt/X.locationSize*ut*et,ot)}}else if(j!==void 0){const pt=j[Q];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(X.location,pt);break;case 3:i.vertexAttrib3fv(X.location,pt);break;case 4:i.vertexAttrib4fv(X.location,pt);break;default:i.vertexAttrib1fv(X.location,pt)}}}}b()}function U(){N();for(const E in n){const O=n[E];for(const H in O){const G=O[H];for(const Y in G)d(G[Y].object),delete G[Y];delete O[H]}delete n[E]}}function P(E){if(n[E.id]===void 0)return;const O=n[E.id];for(const H in O){const G=O[H];for(const Y in G)d(G[Y].object),delete G[Y];delete O[H]}delete n[E.id]}function R(E){for(const O in n){const H=n[O];if(H[E.id]===void 0)continue;const G=H[E.id];for(const Y in G)d(G[Y].object),delete G[Y];delete H[E.id]}}function N(){T(),o=!0,r!==s&&(r=s,h(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function jg(i,t,e){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function o(h,d,f){f!==0&&(i.drawArraysInstanced(n,h,d,f),e.update(d,n,f))}function a(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=d[x];e.update(_,n,1)}function c(h,d,f,p){if(f===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<h.length;x++)o(h[x],d[x],p[x]);else{_.multiDrawArraysInstancedWEBGL(n,h,0,d,0,p,0,f);let x=0;for(let y=0;y<f;y++)x+=d[y]*p[y];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Zg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===Xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Wn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==zn&&!N)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=c(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:_,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:U,maxSamples:P}}function $g(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Bn,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const _=f.length!==0||p||n!==0||s;return s=p,n=f.length,_},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=d(f,p,0)},this.setState=function(f,p,_){const x=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||x===null||x.length===0||r&&!m)r?d(null):h();else{const b=r?0:n,M=b*4;let S=u.clippingState||null;c.value=S,S=d(x,p,M,_);for(let U=0;U!==M;++U)S[U]=e[U];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,p,_,x){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=c.value,x!==!0||m===null){const u=_+y*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,S=_;M!==y;++M,S+=4)o.copy(f[M]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Kg(i){let t=new WeakMap;function e(o,a){return a===va?o.mapping=as:a===xa&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===va||a===xa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new cp(c.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class cu extends ru{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qi=4,Al=[.125,.215,.35,.446,.526,.582],wi=20,Go=new cu,Cl=new Jt;let Vo=null,Wo=0,Xo=0,qo=!1;const Mi=(1+Math.sqrt(5))/2,Ki=1/Mi,Rl=[new I(-Mi,Ki,0),new I(Mi,Ki,0),new I(-Ki,0,Mi),new I(Ki,0,Mi),new I(0,Mi,-Ki),new I(0,Mi,Ki),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Vo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vo,Wo,Xo),this._renderer.xr.enabled=qo,t.scissorTest=!1,Mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Xs,format:vn,colorSpace:ds,depthBuffer:!1},s=Ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jg(r)),this._blurMaterial=Qg(r,t,e)}return s}_compileMaterial(t){const e=new at(this._lodPlanes[0],t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,n,s){const a=new ln(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Cl),d.toneMapping=ai,d.autoClear=!1;const _=new js({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),x=new at(new ge,_);let y=!1;const m=t.background;m?m.isColor&&(_.color.copy(m),t.background=null,y=!0):(_.color.copy(Cl),y=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(a.up.set(0,c[u],0),a.lookAt(h[u],0,0)):b===1?(a.up.set(0,0,c[u]),a.lookAt(0,h[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,h[u]));const M=this._cubeSize;Mr(s,b*M,u>2?M:0,M,M),d.setRenderTarget(s),y&&d.render(x,a),d.render(t,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===as||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Mr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Go)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rl[(s-r-1)%Rl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new at(this._lodPlanes[s],h),p=h.uniforms,_=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*wi-1),y=r/x,m=isFinite(r)?1+Math.floor(d*y):wi;m>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const u=[];let b=0;for(let R=0;R<wi;++R){const N=R/y,T=Math.exp(-N*N/2);u.push(T),R===0?b+=T:R<m&&(b+=2*T)}for(let R=0;R<u.length;R++)u[R]=u[R]/b;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:M}=this;p.dTheta.value=x,p.mipInt.value=M-n;const S=this._sizeLods[s],U=3*S*(s>M-Qi?s-M+Qi:0),P=4*(this._cubeSize-S);Mr(e,U,P,3*S,2*S),c.setRenderTarget(e),c.render(f,Go)}}function Jg(i){const t=[],e=[],n=[];let s=i;const r=i-Qi+1+Al.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Qi?c=Al[o-i+Qi-1]:o===0&&(c=0),n.push(c);const h=1/(a-2),d=-h,f=1+h,p=[d,d,f,d,f,f,d,d,f,f,d,f],_=6,x=6,y=3,m=2,u=1,b=new Float32Array(y*x*_),M=new Float32Array(m*x*_),S=new Float32Array(u*x*_);for(let P=0;P<_;P++){const R=P%3*2/3-1,N=P>2?0:-1,T=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];b.set(T,y*x*P),M.set(p,m*x*P);const E=[P,P,P,P,P,P];S.set(E,u*x*P)}const U=new He;U.setAttribute("position",new yn(b,y)),U.setAttribute("uv",new yn(M,m)),U.setAttribute("faceIndex",new yn(S,u)),t.push(U),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ll(i,t,e){const n=new Di(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qg(i,t,e){const n=new Float32Array(wi),s=new I(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Dl(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Il(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===va||c===xa,d=c===as||c===cs;if(h||d){let f=t.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Pl(i)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const _=a.image;return h&&_&&_.height>0||d&&_&&s(_)?(e===null&&(e=new Pl(i)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0;const h=6;for(let d=0;d<h;d++)a[d]!==void 0&&c++;return c===h}function r(a){const c=a.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function e_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function n_(i,t,e,n){const s={},r=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const x in p.attributes)t.remove(p.attributes[x]);for(const x in p.morphAttributes){const y=p.morphAttributes[x];for(let m=0,u=y.length;m<u;m++)t.remove(y[m])}p.removeEventListener("dispose",o),delete s[p.id];const _=r.get(p);_&&(t.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const x in p)t.update(p[x],i.ARRAY_BUFFER);const _=f.morphAttributes;for(const x in _){const y=_[x];for(let m=0,u=y.length;m<u;m++)t.update(y[m],i.ARRAY_BUFFER)}}function h(f){const p=[],_=f.index,x=f.attributes.position;let y=0;if(_!==null){const b=_.array;y=_.version;for(let M=0,S=b.length;M<S;M+=3){const U=b[M+0],P=b[M+1],R=b[M+2];p.push(U,P,P,R,R,U)}}else if(x!==void 0){const b=x.array;y=x.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const U=M+0,P=M+1,R=M+2;p.push(U,P,P,R,R,U)}}else return;const m=new(Jh(p)?iu:nu)(p,1);m.version=y;const u=r.get(f);u&&t.remove(u),r.set(f,m)}function d(f){const p=r.get(f);if(p){const _=f.index;_!==null&&p.version<_.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function i_(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,_){i.drawElements(n,_,r,p*o),e.update(_,n,1)}function h(p,_,x){x!==0&&(i.drawElementsInstanced(n,_,r,p*o,x),e.update(_,n,x))}function d(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,r,p,0,x);let m=0;for(let u=0;u<x;u++)m+=_[u];e.update(m,n,1)}function f(p,_,x,y){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)h(p[u]/o,_[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(n,_,0,r,p,0,y,0,x);let u=0;for(let b=0;b<x;b++)u+=_[b]*y[b];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function s_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function r_(i,t,e){const n=new WeakMap,s=new we;function r(o,a,c){const h=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let p=n.get(a);if(p===void 0||p.count!==f){let E=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var _=E;p!==void 0&&p.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let U=a.attributes.position.count*S,P=1;U>t.maxTextureSize&&(P=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const R=new Float32Array(U*P*4*f),N=new tu(R,U,P,f);N.type=zn,N.needsUpdate=!0;const T=S*4;for(let O=0;O<f;O++){const H=u[O],G=b[O],Y=M[O],Z=U*P*4*O;for(let j=0;j<H.count;j++){const Q=j*T;x===!0&&(s.fromBufferAttribute(H,j),R[Z+Q+0]=s.x,R[Z+Q+1]=s.y,R[Z+Q+2]=s.z,R[Z+Q+3]=0),y===!0&&(s.fromBufferAttribute(G,j),R[Z+Q+4]=s.x,R[Z+Q+5]=s.y,R[Z+Q+6]=s.z,R[Z+Q+7]=0),m===!0&&(s.fromBufferAttribute(Y,j),R[Z+Q+8]=s.x,R[Z+Q+9]=s.y,R[Z+Q+10]=s.z,R[Z+Q+11]=Y.itemSize===4?s.w:1)}}p={count:f,texture:N,size:new Bt(U,P)},n.set(a,p),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let m=0;m<h.length;m++)x+=h[m];const y=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function o_(i,t,e,n){let s=new WeakMap;function r(c){const h=n.render.frame,d=c.geometry,f=t.get(c,d);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function o(){s=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}class lu extends nn{constructor(t,e,n,s,r,o,a,c,h,d=ss){if(d!==ss&&d!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ss&&(n=Li),n===void 0&&d===hs&&(n=ls),super(null,s,r,o,a,c,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xn,this.minFilter=c!==void 0?c:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const hu=new nn,Ul=new lu(1,1),uu=new tu,du=new qf,fu=new ou,Nl=[],Ol=[],Fl=new Float32Array(16),Bl=new Float32Array(9),zl=new Float32Array(4);function ps(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Nl[s];if(r===void 0&&(r=new Float32Array(s),Nl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qr(i,t){let e=Ol[t];e===void 0&&(e=new Int32Array(t),Ol[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function a_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function c_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function l_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function h_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function u_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;zl.set(n),i.uniformMatrix2fv(this.addr,!1,zl),Ne(e,n)}}function d_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Bl.set(n),i.uniformMatrix3fv(this.addr,!1,Bl),Ne(e,n)}}function f_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Fl.set(n),i.uniformMatrix4fv(this.addr,!1,Fl),Ne(e,n)}}function p_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function m_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function g_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function __(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function v_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function x_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function S_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function M_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ul.compareFunction=Kh,r=Ul):r=hu,e.setTexture2D(t||r,s)}function E_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||du,s)}function b_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fu,s)}function w_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||uu,s)}function T_(i){switch(i){case 5126:return a_;case 35664:return c_;case 35665:return l_;case 35666:return h_;case 35674:return u_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return __;case 5125:return v_;case 36294:return x_;case 36295:return y_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return w_}}function A_(i,t){i.uniform1fv(this.addr,t)}function C_(i,t){const e=ps(t,this.size,2);i.uniform2fv(this.addr,e)}function R_(i,t){const e=ps(t,this.size,3);i.uniform3fv(this.addr,e)}function P_(i,t){const e=ps(t,this.size,4);i.uniform4fv(this.addr,e)}function L_(i,t){const e=ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function D_(i,t){const e=ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function I_(i,t){const e=ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function U_(i,t){i.uniform1iv(this.addr,t)}function N_(i,t){i.uniform2iv(this.addr,t)}function O_(i,t){i.uniform3iv(this.addr,t)}function F_(i,t){i.uniform4iv(this.addr,t)}function B_(i,t){i.uniform1uiv(this.addr,t)}function z_(i,t){i.uniform2uiv(this.addr,t)}function k_(i,t){i.uniform3uiv(this.addr,t)}function H_(i,t){i.uniform4uiv(this.addr,t)}function G_(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||hu,r[o])}function V_(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||du,r[o])}function W_(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||fu,r[o])}function X_(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||uu,r[o])}function q_(i){switch(i){case 5126:return A_;case 35664:return C_;case 35665:return R_;case 35666:return P_;case 35674:return L_;case 35675:return D_;case 35676:return I_;case 5124:case 35670:return U_;case 35667:case 35671:return N_;case 35668:case 35672:return O_;case 35669:case 35673:return F_;case 5125:return B_;case 36294:return z_;case 36295:return k_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}class Y_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T_(e.type)}}class j_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q_(e.type)}}class Z_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function kl(i,t){i.seq.push(t),i.map[t.id]=t}function $_(i,t,e){const n=i.name,s=n.length;for(Yo.lastIndex=0;;){const r=Yo.exec(n),o=Yo.lastIndex;let a=r[1];const c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===s){kl(e,h===void 0?new Y_(a,i,t):new j_(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Z_(a),kl(e,f)),e=f}}}class Gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);$_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Hl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const K_=37297;let J_=0;function Q_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Gl=new qt;function t0(i){ee._getMatrix(Gl,ee.workingColorSpace,i);const t=`mat3( ${Gl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case $r:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Q_(i.getShaderSource(t),o)}else return s}function e0(i,t){const e=t0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function n0(i,t){let e;switch(t){case xf:e="Linear";break;case yf:e="Reinhard";break;case Sf:e="Cineon";break;case Bh:e="ACESFilmic";break;case Ef:e="AgX";break;case bf:e="Neutral";break;case Mf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Er=new I;function i0(){ee.getLuminanceCoefficients(Er);const i=Er.x.toFixed(4),t=Er.y.toFixed(4),e=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function r0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function As(i){return i!==""}function Wl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const a0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(i){return i.replace(a0,l0)}const c0=new Map;function l0(i,t){let e=Yt[t];if(e===void 0){const n=c0.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Za(e)}const h0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(i){return i.replace(h0,u0)}function u0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function d0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Oh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function f0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case cs:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function p0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function m0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fh:t="ENVMAP_BLENDING_MULTIPLY";break;case _f:t="ENVMAP_BLENDING_MIX";break;case vf:t="ENVMAP_BLENDING_ADD";break}return t}function g0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=d0(e),h=f0(e),d=p0(e),f=m0(e),p=g0(e),_=s0(e),x=r0(r),y=s.createProgram();let m,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(As).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(As).join(`
`),u.length>0&&(u+=`
`)):(m=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),u=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Yt.tonemapping_pars_fragment:"",e.toneMapping!==ai?n0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,e0("linearToOutputTexel",e.outputColorSpace),i0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),o=Za(o),o=Wl(o,e),o=Xl(o,e),a=Za(a),a=Wl(a,e),a=Xl(a,e),o=ql(o),a=ql(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=b+m+o,S=b+u+a,U=Hl(s,s.VERTEX_SHADER,M),P=Hl(s,s.FRAGMENT_SHADER,S);s.attachShader(y,U),s.attachShader(y,P),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(O){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(y).trim(),G=s.getShaderInfoLog(U).trim(),Y=s.getShaderInfoLog(P).trim();let Z=!0,j=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,U,P);else{const Q=Vl(s,U,"vertex"),X=Vl(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+H+`
`+Q+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||Y==="")&&(j=!1);j&&(O.diagnostics={runnable:Z,programLog:H,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:u}})}s.deleteShader(U),s.deleteShader(P),N=new Gr(s,y),T=o0(s,y)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(y,K_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=P,this}let v0=0;class x0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new y0(t),e.set(t,n)),n}}class y0{constructor(t){this.id=v0++,this.code=t,this.usedTimes=0}}function S0(i,t,e,n,s,r,o){const a=new bc,c=new x0,h=new Set,d=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return h.add(T),T===0?"uv":`uv${T}`}function m(T,E,O,H,G){const Y=H.fog,Z=G.geometry,j=T.isMeshStandardMaterial?H.environment:null,Q=(T.isMeshStandardMaterial?e:t).get(T.envMap||j),X=Q&&Q.mapping===Zr?Q.image.height:null,rt=x[T.type];T.precision!==null&&(_=s.getMaxPrecision(T.precision),_!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const pt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,lt=pt!==void 0?pt.length:0;let Et=0;Z.morphAttributes.position!==void 0&&(Et=1),Z.morphAttributes.normal!==void 0&&(Et=2),Z.morphAttributes.color!==void 0&&(Et=3);let zt,K,et,ot;if(rt){const re=Rn[rt];zt=re.vertexShader,K=re.fragmentShader}else zt=T.vertexShader,K=T.fragmentShader,c.update(T),et=c.getVertexShaderID(T),ot=c.getFragmentShaderID(T);const ut=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),wt=G.isInstancedMesh===!0,Dt=G.isBatchedMesh===!0,_e=!!T.map,jt=!!T.matcap,xe=!!Q,k=!!T.aoMap,qe=!!T.lightMap,Zt=!!T.bumpMap,$t=!!T.normalMap,It=!!T.displacementMap,pe=!!T.emissiveMap,Ut=!!T.metalnessMap,L=!!T.roughnessMap,w=T.anisotropy>0,V=T.clearcoat>0,st=T.dispersion>0,J=T.iridescence>0,nt=T.sheen>0,Pt=T.transmission>0,_t=w&&!!T.anisotropyMap,yt=V&&!!T.clearcoatMap,Qt=V&&!!T.clearcoatNormalMap,ct=V&&!!T.clearcoatRoughnessMap,St=J&&!!T.iridescenceMap,Nt=J&&!!T.iridescenceThicknessMap,Ot=nt&&!!T.sheenColorMap,Mt=nt&&!!T.sheenRoughnessMap,Kt=!!T.specularMap,Vt=!!T.specularColorMap,le=!!T.specularIntensityMap,F=Pt&&!!T.transmissionMap,ft=Pt&&!!T.thicknessMap,$=!!T.gradientMap,it=!!T.alphaMap,xt=T.alphaTest>0,vt=!!T.alphaHash,kt=!!T.extensions;let ve=ai;T.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ve=i.toneMapping);const De={shaderID:rt,shaderType:T.type,shaderName:T.name,vertexShader:zt,fragmentShader:K,defines:T.defines,customVertexShaderID:et,customFragmentShaderID:ot,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Dt,batchingColor:Dt&&G._colorsTexture!==null,instancing:wt,instancingColor:wt&&G.instanceColor!==null,instancingMorph:wt&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ds,alphaToCoverage:!!T.alphaToCoverage,map:_e,matcap:jt,envMap:xe,envMapMode:xe&&Q.mapping,envMapCubeUVHeight:X,aoMap:k,lightMap:qe,bumpMap:Zt,normalMap:$t,displacementMap:p&&It,emissiveMap:pe,normalMapObjectSpace:$t&&T.normalMapType===Cf,normalMapTangentSpace:$t&&T.normalMapType===$h,metalnessMap:Ut,roughnessMap:L,anisotropy:w,anisotropyMap:_t,clearcoat:V,clearcoatMap:yt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:ct,dispersion:st,iridescence:J,iridescenceMap:St,iridescenceThicknessMap:Nt,sheen:nt,sheenColorMap:Ot,sheenRoughnessMap:Mt,specularMap:Kt,specularColorMap:Vt,specularIntensityMap:le,transmission:Pt,transmissionMap:F,thicknessMap:ft,gradientMap:$,opaque:T.transparent===!1&&T.blending===is&&T.alphaToCoverage===!1,alphaMap:it,alphaTest:xt,alphaHash:vt,combine:T.combine,mapUv:_e&&y(T.map.channel),aoMapUv:k&&y(T.aoMap.channel),lightMapUv:qe&&y(T.lightMap.channel),bumpMapUv:Zt&&y(T.bumpMap.channel),normalMapUv:$t&&y(T.normalMap.channel),displacementMapUv:It&&y(T.displacementMap.channel),emissiveMapUv:pe&&y(T.emissiveMap.channel),metalnessMapUv:Ut&&y(T.metalnessMap.channel),roughnessMapUv:L&&y(T.roughnessMap.channel),anisotropyMapUv:_t&&y(T.anisotropyMap.channel),clearcoatMapUv:yt&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&y(T.sheenRoughnessMap.channel),specularMapUv:Kt&&y(T.specularMap.channel),specularColorMapUv:Vt&&y(T.specularColorMap.channel),specularIntensityMapUv:le&&y(T.specularIntensityMap.channel),transmissionMapUv:F&&y(T.transmissionMap.channel),thicknessMapUv:ft&&y(T.thicknessMap.channel),alphaMapUv:it&&y(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&($t||w),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(_e||it),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:bt,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Et,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:_e&&T.map.isVideoTexture===!0&&ee.getTransfer(T.map.colorSpace)===he,decodeVideoTextureEmissive:pe&&T.emissiveMap.isVideoTexture===!0&&ee.getTransfer(T.emissiveMap.colorSpace)===he,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_n,flipSided:T.side===Je,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:kt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&T.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return De.vertexUv1s=h.has(1),De.vertexUv2s=h.has(2),De.vertexUv3s=h.has(3),h.clear(),De}function u(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const O in T.defines)E.push(O),E.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(b(E,T),M(E,T),E.push(i.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function b(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function M(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const E=x[T.type];let O;if(E){const H=Rn[E];O=sp.clone(H.uniforms)}else O=T.uniforms;return O}function U(T,E){let O;for(let H=0,G=d.length;H<G;H++){const Y=d[H];if(Y.cacheKey===E){O=Y,++O.usedTimes;break}}return O===void 0&&(O=new _0(i,E,T,r),d.push(O)),O}function P(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function R(T){c.remove(T)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:U,releaseProgram:P,releaseShaderCache:R,programs:d,dispose:N}}function M0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function E0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,p,_,x,y,m){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:p,material:_,groupOrder:x,renderOrder:f.renderOrder,z:y,group:m},i[t]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=_,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=y,u.group=m),t++,u}function a(f,p,_,x,y,m){const u=o(f,p,_,x,y,m);_.transmission>0?n.push(u):_.transparent===!0?s.push(u):e.push(u)}function c(f,p,_,x,y,m){const u=o(f,p,_,x,y,m);_.transmission>0?n.unshift(u):_.transparent===!0?s.unshift(u):e.unshift(u)}function h(f,p){e.length>1&&e.sort(f||E0),n.length>1&&n.sort(p||jl),s.length>1&&s.sort(p||jl)}function d(){for(let f=t,p=i.length;f<p;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:d,sort:h}}function b0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Zl,i.set(n,[o])):s>=r.length?(o=new Zl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function w0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Jt};break;case"SpotLight":e={position:new I,direction:new I,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function T0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let A0=0;function C0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function R0(i){const t=new w0,e=T0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);const s=new I,r=new fe,o=new fe;function a(h){let d=0,f=0,p=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let _=0,x=0,y=0,m=0,u=0,b=0,M=0,S=0,U=0,P=0,R=0;h.sort(C0);for(let T=0,E=h.length;T<E;T++){const O=h[T],H=O.color,G=O.intensity,Y=O.distance,Z=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=H.r*G,f+=H.g*G,p+=H.b*G;else if(O.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(O.sh.coefficients[j],G);R++}else if(O.isDirectionalLight){const j=t.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const Q=O.shadow,X=e.get(O);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.directionalShadow[_]=X,n.directionalShadowMap[_]=Z,n.directionalShadowMatrix[_]=O.shadow.matrix,b++}n.directional[_]=j,_++}else if(O.isSpotLight){const j=t.get(O);j.position.setFromMatrixPosition(O.matrixWorld),j.color.copy(H).multiplyScalar(G),j.distance=Y,j.coneCos=Math.cos(O.angle),j.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),j.decay=O.decay,n.spot[y]=j;const Q=O.shadow;if(O.map&&(n.spotLightMap[U]=O.map,U++,Q.updateMatrices(O),O.castShadow&&P++),n.spotLightMatrix[y]=Q.matrix,O.castShadow){const X=e.get(O);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=Z,S++}y++}else if(O.isRectAreaLight){const j=t.get(O);j.color.copy(H).multiplyScalar(G),j.halfWidth.set(O.width*.5,0,0),j.halfHeight.set(0,O.height*.5,0),n.rectArea[m]=j,m++}else if(O.isPointLight){const j=t.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),j.distance=O.distance,j.decay=O.decay,O.castShadow){const Q=O.shadow,X=e.get(O);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,n.pointShadow[x]=X,n.pointShadowMap[x]=Z,n.pointShadowMatrix[x]=O.shadow.matrix,M++}n.point[x]=j,x++}else if(O.isHemisphereLight){const j=t.get(O);j.skyColor.copy(O.color).multiplyScalar(G),j.groundColor.copy(O.groundColor).multiplyScalar(G),n.hemi[u]=j,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=p;const N=n.hash;(N.directionalLength!==_||N.pointLength!==x||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==b||N.numPointShadows!==M||N.numSpotShadows!==S||N.numSpotMaps!==U||N.numLightProbes!==R)&&(n.directional.length=_,n.spot.length=y,n.rectArea.length=m,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+U-P,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,N.directionalLength=_,N.pointLength=x,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=b,N.numPointShadows=M,N.numSpotShadows=S,N.numSpotMaps=U,N.numLightProbes=R,n.version=A0++)}function c(h,d){let f=0,p=0,_=0,x=0,y=0;const m=d.matrixWorldInverse;for(let u=0,b=h.length;u<b;u++){const M=h[u];if(M.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(M.isSpotLight){const S=n.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),_++}else if(M.isRectAreaLight){const S=n.rectArea[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const S=n.hemi[y];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function $l(i){const t=new R0(i),e=[],n=[];function s(d){h.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function P0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new $l(i),t.set(s,[a])):r>=o.length?(a=new $l(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class L0 extends fs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class D0 extends fs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const I0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N0(i,t,e){let n=new wc;const s=new Bt,r=new Bt,o=new we,a=new L0({depthPacking:Af}),c=new D0,h={},d=e.maxTextureSize,f={[hi]:Je,[Je]:hi,[_n]:_n},p=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:I0,fragmentShader:U0}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const x=new He;x.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new at(x,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let u=this.type;this.render=function(P,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const T=i.getRenderTarget(),E=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),H=i.state;H.setBlending(oi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=u!==On&&this.type===On,Y=u===On&&this.type!==On;for(let Z=0,j=P.length;Z<j;Z++){const Q=P[Z],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const rt=X.getFrameExtents();if(s.multiply(rt),r.copy(X.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/rt.x),s.x=r.x*rt.x,X.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/rt.y),s.y=r.y*rt.y,X.mapSize.y=r.y)),X.map===null||G===!0||Y===!0){const lt=this.type!==On?{minFilter:xn,magFilter:xn}:{};X.map!==null&&X.map.dispose(),X.map=new Di(s.x,s.y,lt),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const pt=X.getViewportCount();for(let lt=0;lt<pt;lt++){const Et=X.getViewport(lt);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),H.viewport(o),X.updateMatrices(Q,lt),n=X.getFrustum(),S(R,N,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===On&&b(X,N),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(T,E,O)};function b(P,R){const N=t.update(y);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Di(s.x,s.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,N,p,y,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,N,_,y,null)}function M(P,R,N,T){let E=null;const O=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(O!==void 0)E=O;else if(E=N.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=E.uuid,G=R.uuid;let Y=h[H];Y===void 0&&(Y={},h[H]=Y);let Z=Y[G];Z===void 0&&(Z=E.clone(),Y[G]=Z,R.addEventListener("dispose",U)),E=Z}if(E.visible=R.visible,E.wireframe=R.wireframe,T===On?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:f[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const H=i.properties.get(E);H.light=N}return E}function S(P,R,N,T,E){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===On)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const G=t.update(P),Y=P.material;if(Array.isArray(Y)){const Z=G.groups;for(let j=0,Q=Z.length;j<Q;j++){const X=Z[j],rt=Y[X.materialIndex];if(rt&&rt.visible){const pt=M(P,rt,T,E);P.onBeforeShadow(i,P,R,N,G,pt,X),i.renderBufferDirect(N,null,G,pt,P,X),P.onAfterShadow(i,P,R,N,G,pt,X)}}}else if(Y.visible){const Z=M(P,Y,T,E);P.onBeforeShadow(i,P,R,N,G,Z,null),i.renderBufferDirect(N,null,G,Z,P,null),P.onAfterShadow(i,P,R,N,G,Z,null)}}const H=P.children;for(let G=0,Y=H.length;G<Y;G++)S(H[G],R,N,T,E)}function U(P){P.target.removeEventListener("dispose",U);for(const N in h){const T=h[N],E=P.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const O0={[ua]:da,[fa]:ga,[pa]:_a,[os]:ma,[da]:ua,[ga]:fa,[_a]:pa,[ma]:os};function F0(i,t){function e(){let F=!1;const ft=new we;let $=null;const it=new we(0,0,0,0);return{setMask:function(xt){$!==xt&&!F&&(i.colorMask(xt,xt,xt,xt),$=xt)},setLocked:function(xt){F=xt},setClear:function(xt,vt,kt,ve,De){De===!0&&(xt*=ve,vt*=ve,kt*=ve),ft.set(xt,vt,kt,ve),it.equals(ft)===!1&&(i.clearColor(xt,vt,kt,ve),it.copy(ft))},reset:function(){F=!1,$=null,it.set(-1,0,0,0)}}}function n(){let F=!1,ft=!1,$=null,it=null,xt=null;return{setReversed:function(vt){if(ft!==vt){const kt=t.get("EXT_clip_control");ft?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const ve=xt;xt=null,this.setClear(ve)}ft=vt},getReversed:function(){return ft},setTest:function(vt){vt?ut(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(vt){$!==vt&&!F&&(i.depthMask(vt),$=vt)},setFunc:function(vt){if(ft&&(vt=O0[vt]),it!==vt){switch(vt){case ua:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case fa:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=vt}},setLocked:function(vt){F=vt},setClear:function(vt){xt!==vt&&(ft&&(vt=1-vt),i.clearDepth(vt),xt=vt)},reset:function(){F=!1,$=null,it=null,xt=null,ft=!1}}}function s(){let F=!1,ft=null,$=null,it=null,xt=null,vt=null,kt=null,ve=null,De=null;return{setTest:function(re){F||(re?ut(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(re){ft!==re&&!F&&(i.stencilMask(re),ft=re)},setFunc:function(re,sn,dn){($!==re||it!==sn||xt!==dn)&&(i.stencilFunc(re,sn,dn),$=re,it=sn,xt=dn)},setOp:function(re,sn,dn){(vt!==re||kt!==sn||ve!==dn)&&(i.stencilOp(re,sn,dn),vt=re,kt=sn,ve=dn)},setLocked:function(re){F=re},setClear:function(re){De!==re&&(i.clearStencil(re),De=re)},reset:function(){F=!1,ft=null,$=null,it=null,xt=null,vt=null,kt=null,ve=null,De=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,h=new WeakMap;let d={},f={},p=new WeakMap,_=[],x=null,y=!1,m=null,u=null,b=null,M=null,S=null,U=null,P=null,R=new Jt(0,0,0),N=0,T=!1,E=null,O=null,H=null,G=null,Y=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Q=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=Q>=2);let rt=null,pt={};const lt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),zt=new we().fromArray(lt),K=new we().fromArray(Et);function et(F,ft,$,it){const xt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(F,vt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<$;kt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ft+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return vt}const ot={};ot[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(os),Zt(!1),$t(tl),ut(i.CULL_FACE),k(oi);function ut(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function bt(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function wt(F,ft){return f[F]!==ft?(i.bindFramebuffer(F,ft),f[F]=ft,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ft),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Dt(F,ft){let $=_,it=!1;if(F){$=p.get(ft),$===void 0&&($=[],p.set(ft,$));const xt=F.textures;if($.length!==xt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,kt=xt.length;vt<kt;vt++)$[vt]=i.COLOR_ATTACHMENT0+vt;$.length=xt.length,it=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,it=!0);it&&i.drawBuffers($)}function _e(F){return x!==F?(i.useProgram(F),x=F,!0):!1}const jt={[bi]:i.FUNC_ADD,[Qd]:i.FUNC_SUBTRACT,[tf]:i.FUNC_REVERSE_SUBTRACT};jt[ef]=i.MIN,jt[nf]=i.MAX;const xe={[sf]:i.ZERO,[rf]:i.ONE,[of]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[df]:i.SRC_ALPHA_SATURATE,[hf]:i.DST_COLOR,[cf]:i.DST_ALPHA,[af]:i.ONE_MINUS_SRC_COLOR,[ha]:i.ONE_MINUS_SRC_ALPHA,[uf]:i.ONE_MINUS_DST_COLOR,[lf]:i.ONE_MINUS_DST_ALPHA,[ff]:i.CONSTANT_COLOR,[pf]:i.ONE_MINUS_CONSTANT_COLOR,[mf]:i.CONSTANT_ALPHA,[gf]:i.ONE_MINUS_CONSTANT_ALPHA};function k(F,ft,$,it,xt,vt,kt,ve,De,re){if(F===oi){y===!0&&(bt(i.BLEND),y=!1);return}if(y===!1&&(ut(i.BLEND),y=!0),F!==Jd){if(F!==m||re!==T){if((u!==bi||S!==bi)&&(i.blendEquation(i.FUNC_ADD),u=bi,S=bi),re)switch(F){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case el:i.blendFunc(i.ONE,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case el:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,M=null,U=null,P=null,R.set(0,0,0),N=0,m=F,T=re}return}xt=xt||ft,vt=vt||$,kt=kt||it,(ft!==u||xt!==S)&&(i.blendEquationSeparate(jt[ft],jt[xt]),u=ft,S=xt),($!==b||it!==M||vt!==U||kt!==P)&&(i.blendFuncSeparate(xe[$],xe[it],xe[vt],xe[kt]),b=$,M=it,U=vt,P=kt),(ve.equals(R)===!1||De!==N)&&(i.blendColor(ve.r,ve.g,ve.b,De),R.copy(ve),N=De),m=F,T=!1}function qe(F,ft){F.side===_n?bt(i.CULL_FACE):ut(i.CULL_FACE);let $=F.side===Je;ft&&($=!$),Zt($),F.blending===is&&F.transparent===!1?k(oi):k(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const it=F.stencilWrite;a.setTest(it),it&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),pe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(F){E!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),E=F)}function $t(F){F!==$d?(ut(i.CULL_FACE),F!==O&&(F===tl?i.cullFace(i.BACK):F===Kd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),O=F}function It(F){F!==H&&(j&&i.lineWidth(F),H=F)}function pe(F,ft,$){F?(ut(i.POLYGON_OFFSET_FILL),(G!==ft||Y!==$)&&(i.polygonOffset(ft,$),G=ft,Y=$)):bt(i.POLYGON_OFFSET_FILL)}function Ut(F){F?ut(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function L(F){F===void 0&&(F=i.TEXTURE0+Z-1),rt!==F&&(i.activeTexture(F),rt=F)}function w(F,ft,$){$===void 0&&(rt===null?$=i.TEXTURE0+Z-1:$=rt);let it=pt[$];it===void 0&&(it={type:void 0,texture:void 0},pt[$]=it),(it.type!==F||it.texture!==ft)&&(rt!==$&&(i.activeTexture($),rt=$),i.bindTexture(F,ft||ot[F]),it.type=F,it.texture=ft)}function V(){const F=pt[rt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(F){zt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),zt.copy(F))}function Mt(F){K.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),K.copy(F))}function Kt(F,ft){let $=h.get(ft);$===void 0&&($=new WeakMap,h.set(ft,$));let it=$.get(F);it===void 0&&(it=i.getUniformBlockIndex(ft,F.name),$.set(F,it))}function Vt(F,ft){const it=h.get(ft).get(F);c.get(ft)!==it&&(i.uniformBlockBinding(ft,it,F.__bindingPointIndex),c.set(ft,it))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},rt=null,pt={},f={},p=new WeakMap,_=[],x=null,y=!1,m=null,u=null,b=null,M=null,S=null,U=null,P=null,R=new Jt(0,0,0),N=0,T=!1,E=null,O=null,H=null,G=null,Y=null,zt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:bt,bindFramebuffer:wt,drawBuffers:Dt,useProgram:_e,setBlending:k,setMaterial:qe,setFlipSided:Zt,setCullFace:$t,setLineWidth:It,setPolygonOffset:pe,setScissorTest:Ut,activeTexture:L,bindTexture:w,unbindTexture:V,compressedTexImage2D:st,compressedTexImage3D:J,texImage2D:St,texImage3D:Nt,updateUBOMapping:Kt,uniformBlockBinding:Vt,texStorage2D:Qt,texStorage3D:ct,texSubImage2D:nt,texSubImage3D:Pt,compressedTexSubImage2D:_t,compressedTexSubImage3D:yt,scissor:Ot,viewport:Mt,reset:le}}function Kl(i,t,e,n){const s=B0(n);switch(e){case Vh:return i*t;case Xh:return i*t;case qh:return i*t*2;case Yh:return i*t/s.components*s.byteLength;case Sc:return i*t/s.components*s.byteLength;case jh:return i*t*2/s.components*s.byteLength;case Mc:return i*t*2/s.components*s.byteLength;case Wh:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Ec:return i*t*4/s.components*s.byteLength;case Fr:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:case wa:return Math.max(i,16)*Math.max(t,8)/4;case Ma:case ba:return Math.max(i,8)*Math.max(t,8)/2;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hr:case Va:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zh:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B0(i){switch(i){case Wn:case kh:return{byteLength:1,components:1};case Us:case Hh:case Xs:return{byteLength:2,components:1};case xc:case yc:return{byteLength:2,components:4};case Li:case vc:case zn:return{byteLength:4,components:1};case Gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function z0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Bt,d=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,w){return _?new OffscreenCanvas(L,w):qr("canvas")}function y(L,w,V){let st=1;const J=Ut(L);if((J.width>V||J.height>V)&&(st=V/Math.max(J.width,J.height)),st<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const nt=Math.floor(st*J.width),Pt=Math.floor(st*J.height);f===void 0&&(f=x(nt,Pt));const _t=w?x(nt,Pt):f;return _t.width=nt,_t.height=Pt,_t.getContext("2d").drawImage(L,0,0,nt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+nt+"x"+Pt+")."),_t}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),L;return L}function m(L){return L.generateMipmaps}function u(L){i.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(L,w,V,st,J=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let nt=w;if(w===i.RED&&(V===i.FLOAT&&(nt=i.R32F),V===i.HALF_FLOAT&&(nt=i.R16F),V===i.UNSIGNED_BYTE&&(nt=i.R8)),w===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.R8UI),V===i.UNSIGNED_SHORT&&(nt=i.R16UI),V===i.UNSIGNED_INT&&(nt=i.R32UI),V===i.BYTE&&(nt=i.R8I),V===i.SHORT&&(nt=i.R16I),V===i.INT&&(nt=i.R32I)),w===i.RG&&(V===i.FLOAT&&(nt=i.RG32F),V===i.HALF_FLOAT&&(nt=i.RG16F),V===i.UNSIGNED_BYTE&&(nt=i.RG8)),w===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RG8UI),V===i.UNSIGNED_SHORT&&(nt=i.RG16UI),V===i.UNSIGNED_INT&&(nt=i.RG32UI),V===i.BYTE&&(nt=i.RG8I),V===i.SHORT&&(nt=i.RG16I),V===i.INT&&(nt=i.RG32I)),w===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),V===i.UNSIGNED_INT&&(nt=i.RGB32UI),V===i.BYTE&&(nt=i.RGB8I),V===i.SHORT&&(nt=i.RGB16I),V===i.INT&&(nt=i.RGB32I)),w===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),V===i.UNSIGNED_INT&&(nt=i.RGBA32UI),V===i.BYTE&&(nt=i.RGBA8I),V===i.SHORT&&(nt=i.RGBA16I),V===i.INT&&(nt=i.RGBA32I)),w===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),w===i.RGBA){const Pt=J?$r:ee.getTransfer(st);V===i.FLOAT&&(nt=i.RGBA32F),V===i.HALF_FLOAT&&(nt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(nt=Pt===he?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function S(L,w){let V;return L?w===null||w===Li||w===ls?V=i.DEPTH24_STENCIL8:w===zn?V=i.DEPTH32F_STENCIL8:w===Us&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Li||w===ls?V=i.DEPTH_COMPONENT24:w===zn?V=i.DEPTH_COMPONENT32F:w===Us&&(V=i.DEPTH_COMPONENT16),V}function U(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==xn&&L.minFilter!==Pn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function P(L){const w=L.target;w.removeEventListener("dispose",P),N(w),w.isVideoTexture&&d.delete(w)}function R(L){const w=L.target;w.removeEventListener("dispose",R),E(w)}function N(L){const w=n.get(L);if(w.__webglInit===void 0)return;const V=L.source,st=p.get(V);if(st){const J=st[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(L),Object.keys(st).length===0&&p.delete(V)}n.remove(L)}function T(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const V=L.source,st=p.get(V);delete st[w.__cacheKey],o.memory.textures--}function E(L){const w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(w.__webglFramebuffer[st]))for(let J=0;J<w.__webglFramebuffer[st].length;J++)i.deleteFramebuffer(w.__webglFramebuffer[st][J]);else i.deleteFramebuffer(w.__webglFramebuffer[st]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[st])}else{if(Array.isArray(w.__webglFramebuffer))for(let st=0;st<w.__webglFramebuffer.length;st++)i.deleteFramebuffer(w.__webglFramebuffer[st]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let st=0;st<w.__webglColorRenderbuffer.length;st++)w.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[st]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=L.textures;for(let st=0,J=V.length;st<J;st++){const nt=n.get(V[st]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(V[st])}n.remove(L)}let O=0;function H(){O=0}function G(){const L=O;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),O+=1,L}function Y(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function Z(L,w){const V=n.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const st=L.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,L,w);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+w)}function j(L,w){const V=n.get(L);if(L.version>0&&V.__version!==L.version){K(V,L,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+w)}function Q(L,w){const V=n.get(L);if(L.version>0&&V.__version!==L.version){K(V,L,w);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+w)}function X(L,w){const V=n.get(L);if(L.version>0&&V.__version!==L.version){et(V,L,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+w)}const rt={[ya]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},pt={[xn]:i.NEAREST,[wf]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[yo]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},lt={[Rf]:i.NEVER,[Nf]:i.ALWAYS,[Pf]:i.LESS,[Kh]:i.LEQUAL,[Lf]:i.EQUAL,[Uf]:i.GEQUAL,[Df]:i.GREATER,[If]:i.NOTEQUAL};function Et(L,w){if(w.type===zn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Pn||w.magFilter===yo||w.magFilter===ir||w.magFilter===Ai||w.minFilter===Pn||w.minFilter===yo||w.minFilter===ir||w.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,rt[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,rt[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,rt[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,pt[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,pt[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,lt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===xn||w.minFilter!==ir&&w.minFilter!==Ai||w.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function zt(L,w){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",P));const st=w.source;let J=p.get(st);J===void 0&&(J={},p.set(st,J));const nt=Y(w);if(nt!==L.__cacheKey){J[nt]===void 0&&(J[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),J[nt].usedTimes++;const Pt=J[L.__cacheKey];Pt!==void 0&&(J[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&T(w)),L.__cacheKey=nt,L.__webglTexture=J[nt].texture}return V}function K(L,w,V){let st=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(st=i.TEXTURE_3D);const J=zt(L,w),nt=w.source;e.bindTexture(st,L.__webglTexture,i.TEXTURE0+V);const Pt=n.get(nt);if(nt.version!==Pt.__version||J===!0){e.activeTexture(i.TEXTURE0+V);const _t=ee.getPrimaries(ee.workingColorSpace),yt=w.colorSpace===ei?null:ee.getPrimaries(w.colorSpace),Qt=w.colorSpace===ei||_t===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let ct=y(w.image,!1,s.maxTextureSize);ct=pe(w,ct);const St=r.convert(w.format,w.colorSpace),Nt=r.convert(w.type);let Ot=M(w.internalFormat,St,Nt,w.colorSpace,w.isVideoTexture);Et(st,w);let Mt;const Kt=w.mipmaps,Vt=w.isVideoTexture!==!0,le=Pt.__version===void 0||J===!0,F=nt.dataReady,ft=U(w,ct);if(w.isDepthTexture)Ot=S(w.format===hs,w.type),le&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Ot,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Ot,ct.width,ct.height,0,St,Nt,null));else if(w.isDataTexture)if(Kt.length>0){Vt&&le&&e.texStorage2D(i.TEXTURE_2D,ft,Ot,Kt[0].width,Kt[0].height);for(let $=0,it=Kt.length;$<it;$++)Mt=Kt[$],Vt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Mt.width,Mt.height,St,Nt,Mt.data):e.texImage2D(i.TEXTURE_2D,$,Ot,Mt.width,Mt.height,0,St,Nt,Mt.data);w.generateMipmaps=!1}else Vt?(le&&e.texStorage2D(i.TEXTURE_2D,ft,Ot,ct.width,ct.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,St,Nt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,ct.width,ct.height,0,St,Nt,ct.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Vt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ot,Kt[0].width,Kt[0].height,ct.depth);for(let $=0,it=Kt.length;$<it;$++)if(Mt=Kt[$],w.format!==vn)if(St!==null)if(Vt){if(F)if(w.layerUpdates.size>0){const xt=Kl(Mt.width,Mt.height,w.format,w.type);for(const vt of w.layerUpdates){const kt=Mt.data.subarray(vt*xt/Mt.data.BYTES_PER_ELEMENT,(vt+1)*xt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,vt,Mt.width,Mt.height,1,St,kt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Mt.width,Mt.height,ct.depth,St,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ot,Mt.width,Mt.height,ct.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Mt.width,Mt.height,ct.depth,St,Nt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Ot,Mt.width,Mt.height,ct.depth,0,St,Nt,Mt.data)}else{Vt&&le&&e.texStorage2D(i.TEXTURE_2D,ft,Ot,Kt[0].width,Kt[0].height);for(let $=0,it=Kt.length;$<it;$++)Mt=Kt[$],w.format!==vn?St!==null?Vt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Mt.width,Mt.height,St,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Ot,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Mt.width,Mt.height,St,Nt,Mt.data):e.texImage2D(i.TEXTURE_2D,$,Ot,Mt.width,Mt.height,0,St,Nt,Mt.data)}else if(w.isDataArrayTexture)if(Vt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ot,ct.width,ct.height,ct.depth),F)if(w.layerUpdates.size>0){const $=Kl(ct.width,ct.height,w.format,w.type);for(const it of w.layerUpdates){const xt=ct.data.subarray(it*$/ct.data.BYTES_PER_ELEMENT,(it+1)*$/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,ct.width,ct.height,1,St,Nt,xt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,St,Nt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,ct.width,ct.height,ct.depth,0,St,Nt,ct.data);else if(w.isData3DTexture)Vt?(le&&e.texStorage3D(i.TEXTURE_3D,ft,Ot,ct.width,ct.height,ct.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,St,Nt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,ct.width,ct.height,ct.depth,0,St,Nt,ct.data);else if(w.isFramebufferTexture){if(le)if(Vt)e.texStorage2D(i.TEXTURE_2D,ft,Ot,ct.width,ct.height);else{let $=ct.width,it=ct.height;for(let xt=0;xt<ft;xt++)e.texImage2D(i.TEXTURE_2D,xt,Ot,$,it,0,St,Nt,null),$>>=1,it>>=1}}else if(Kt.length>0){if(Vt&&le){const $=Ut(Kt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Ot,$.width,$.height)}for(let $=0,it=Kt.length;$<it;$++)Mt=Kt[$],Vt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,St,Nt,Mt):e.texImage2D(i.TEXTURE_2D,$,Ot,St,Nt,Mt);w.generateMipmaps=!1}else if(Vt){if(le){const $=Ut(ct);e.texStorage2D(i.TEXTURE_2D,ft,Ot,$.width,$.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Nt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Ot,St,Nt,ct);m(w)&&u(st),Pt.__version=nt.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function et(L,w,V){if(w.image.length!==6)return;const st=zt(L,w),J=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+V);const nt=n.get(J);if(J.version!==nt.__version||st===!0){e.activeTexture(i.TEXTURE0+V);const Pt=ee.getPrimaries(ee.workingColorSpace),_t=w.colorSpace===ei?null:ee.getPrimaries(w.colorSpace),yt=w.colorSpace===ei||Pt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Qt=w.isCompressedTexture||w.image[0].isCompressedTexture,ct=w.image[0]&&w.image[0].isDataTexture,St=[];for(let it=0;it<6;it++)!Qt&&!ct?St[it]=y(w.image[it],!0,s.maxCubemapSize):St[it]=ct?w.image[it].image:w.image[it],St[it]=pe(w,St[it]);const Nt=St[0],Ot=r.convert(w.format,w.colorSpace),Mt=r.convert(w.type),Kt=M(w.internalFormat,Ot,Mt,w.colorSpace),Vt=w.isVideoTexture!==!0,le=nt.__version===void 0||st===!0,F=J.dataReady;let ft=U(w,Nt);Et(i.TEXTURE_CUBE_MAP,w);let $;if(Qt){Vt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Kt,Nt.width,Nt.height);for(let it=0;it<6;it++){$=St[it].mipmaps;for(let xt=0;xt<$.length;xt++){const vt=$[xt];w.format!==vn?Ot!==null?Vt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,0,0,vt.width,vt.height,Ot,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,Kt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,0,0,vt.width,vt.height,Ot,Mt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,Kt,vt.width,vt.height,0,Ot,Mt,vt.data)}}}else{if($=w.mipmaps,Vt&&le){$.length>0&&ft++;const it=Ut(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Kt,it.width,it.height)}for(let it=0;it<6;it++)if(ct){Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,St[it].width,St[it].height,Ot,Mt,St[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Kt,St[it].width,St[it].height,0,Ot,Mt,St[it].data);for(let xt=0;xt<$.length;xt++){const kt=$[xt].image[it].image;Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,0,0,kt.width,kt.height,Ot,Mt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,Kt,kt.width,kt.height,0,Ot,Mt,kt.data)}}else{Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,Mt,St[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Kt,Ot,Mt,St[it]);for(let xt=0;xt<$.length;xt++){const vt=$[xt];Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,0,0,Ot,Mt,vt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,Kt,Ot,Mt,vt.image[it])}}}m(w)&&u(i.TEXTURE_CUBE_MAP),nt.__version=J.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ot(L,w,V,st,J,nt){const Pt=r.convert(V.format,V.colorSpace),_t=r.convert(V.type),yt=M(V.internalFormat,Pt,_t,V.colorSpace),Qt=n.get(w),ct=n.get(V);if(ct.__renderTarget=w,!Qt.__hasExternalTextures){const St=Math.max(1,w.width>>nt),Nt=Math.max(1,w.height>>nt);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,nt,yt,St,Nt,w.depth,0,Pt,_t,null):e.texImage2D(J,nt,yt,St,Nt,0,Pt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),$t(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,J,ct.__webglTexture,0,Zt(w)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,J,ct.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(L,w,V){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const st=w.depthTexture,J=st&&st.isDepthTexture?st.type:null,nt=S(w.stencilBuffer,J),Pt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=Zt(w);$t(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,nt,w.width,w.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,nt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,nt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,L)}else{const st=w.textures;for(let J=0;J<st.length;J++){const nt=st[J],Pt=r.convert(nt.format,nt.colorSpace),_t=r.convert(nt.type),yt=M(nt.internalFormat,Pt,_t,nt.colorSpace),Qt=Zt(w);V&&$t(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,yt,w.width,w.height):$t(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,yt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,yt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(w.depthTexture);st.__renderTarget=w,(!st.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);const J=st.__webglTexture,nt=Zt(w);if(w.depthTexture.format===ss)$t(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(w.depthTexture.format===hs)$t(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function wt(L){const w=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const st=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),st){const J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,st.removeEventListener("dispose",J)};st.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=st}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");bt(w.__webglFramebuffer,L)}else if(V){w.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[st]),w.__webglDepthbuffer[st]===void 0)w.__webglDepthbuffer[st]=i.createRenderbuffer(),ut(w.__webglDepthbuffer[st],L,!1);else{const J=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=w.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ut(w.__webglDepthbuffer,L,!1);else{const st=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(L,w,V){const st=n.get(L);w!==void 0&&ot(st.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&wt(L)}function _e(L){const w=L.texture,V=n.get(L),st=n.get(w);L.addEventListener("dispose",R);const J=L.textures,nt=L.isWebGLCubeRenderTarget===!0,Pt=J.length>1;if(Pt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=w.version,o.memory.textures++),nt){V.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[_t]=[];for(let yt=0;yt<w.mipmaps.length;yt++)V.__webglFramebuffer[_t][yt]=i.createFramebuffer()}else V.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let _t=0;_t<w.mipmaps.length;_t++)V.__webglFramebuffer[_t]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let _t=0,yt=J.length;_t<yt;_t++){const Qt=n.get(J[_t]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&$t(L)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let _t=0;_t<J.length;_t++){const yt=J[_t];V.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[_t]);const Qt=r.convert(yt.format,yt.colorSpace),ct=r.convert(yt.type),St=M(yt.internalFormat,Qt,ct,yt.colorSpace,L.isXRRenderTarget===!0),Nt=Zt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,St,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,V.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Et(i.TEXTURE_CUBE_MAP,w);for(let _t=0;_t<6;_t++)if(w.mipmaps&&w.mipmaps.length>0)for(let yt=0;yt<w.mipmaps.length;yt++)ot(V.__webglFramebuffer[_t][yt],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,yt);else ot(V.__webglFramebuffer[_t],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(w)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let _t=0,yt=J.length;_t<yt;_t++){const Qt=J[_t],ct=n.get(Qt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),Et(i.TEXTURE_2D,Qt),ot(V.__webglFramebuffer,L,Qt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),m(Qt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_t=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,st.__webglTexture),Et(_t,w),w.mipmaps&&w.mipmaps.length>0)for(let yt=0;yt<w.mipmaps.length;yt++)ot(V.__webglFramebuffer[yt],L,w,i.COLOR_ATTACHMENT0,_t,yt);else ot(V.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,_t,0);m(w)&&u(_t),e.unbindTexture()}L.depthBuffer&&wt(L)}function jt(L){const w=L.textures;for(let V=0,st=w.length;V<st;V++){const J=w[V];if(m(J)){const nt=b(L),Pt=n.get(J).__webglTexture;e.bindTexture(nt,Pt),u(nt),e.unbindTexture()}}}const xe=[],k=[];function qe(L){if(L.samples>0){if($t(L)===!1){const w=L.textures,V=L.width,st=L.height;let J=i.COLOR_BUFFER_BIT;const nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(L),_t=w.length>1;if(_t)for(let yt=0;yt<w.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let yt=0;yt<w.length;yt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[yt]);const Qt=n.get(w[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,V,st,0,0,V,st,J,i.NEAREST),c===!0&&(xe.length=0,k.length=0,xe.push(i.COLOR_ATTACHMENT0+yt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(xe.push(nt),k.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let yt=0;yt<w.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[yt]);const Qt=n.get(w[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Zt(L){return Math.min(s.maxSamples,L.samples)}function $t(L){const w=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(L){const w=o.render.frame;d.get(L)!==w&&(d.set(L,w),L.update())}function pe(L,w){const V=L.colorSpace,st=L.format,J=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==ds&&V!==ei&&(ee.getTransfer(V)===he?(st!==vn||J!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function Ut(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=Dt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=$t}function k0(i,t){function e(n,s=ei){let r;const o=ee.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return i.BYTE;if(n===Hh)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===vc)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Xs)return i.HALF_FLOAT;if(n===Vh)return i.ALPHA;if(n===Wh)return i.RGB;if(n===vn)return i.RGBA;if(n===Xh)return i.LUMINANCE;if(n===qh)return i.LUMINANCE_ALPHA;if(n===ss)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===Yh)return i.RED;if(n===Sc)return i.RED_INTEGER;if(n===jh)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===Ec)return i.RGBA_INTEGER;if(n===Fr||n===Br||n===zr||n===kr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Ea||n===ba||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ta||n===Aa||n===Ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ta||n===Aa)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Oa||n===Fa||n===Ba||n===za||n===ka||n===Ha||n===Ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hr||n===Va||n===Wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hr)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zh||n===Xa||n===qa||n===Ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class H0 extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class un extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G0={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,n),u=this._getHandJoint(h,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=d.position.distanceTo(f.position),_=.02,x=.005;h.inputState.pinching&&p>_+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=_-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const V0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class X0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new nn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:V0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q0 extends Ni{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,h=null,d=null,f=null,p=null,_=null,x=null;const y=new X0,m=e.getContextAttributes();let u=null,b=null;const M=[],S=[],U=new Bt;let P=null;const R=new ln;R.viewport=new we;const N=new ln;N.viewport=new we;const T=[R,N],E=new H0;let O=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=M[K];return et===void 0&&(et=new jo,M[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=M[K];return et===void 0&&(et=new jo,M[K]=et),et.getGripSpace()},this.getHand=function(K){let et=M[K];return et===void 0&&(et=new jo,M[K]=et),et.getHandSpace()};function G(K){const et=S.indexOf(K.inputSource);if(et===-1)return;const ot=M[et];ot!==void 0&&(ot.update(K.inputSource,K.frame,h||o),ot.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<M.length;K++){const et=S[K];et!==null&&(S[K]=null,M[K].disconnect(et))}O=null,H=null,y.reset(),t.setRenderTarget(u),_=null,p=null,f=null,s=null,b=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),b=new Di(_.framebufferWidth,_.framebufferHeight,{format:vn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,ot=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?hs:ss,ot=m.stencil?ls:Li);const bt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};f=new XRWebGLBinding(s,e),p=f.createProjectionLayer(bt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new Di(p.textureWidth,p.textureHeight,{format:vn,type:Wn,depthTexture:new lu(p.textureWidth,p.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(a),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(K){for(let et=0;et<K.removed.length;et++){const ot=K.removed[et],ut=S.indexOf(ot);ut>=0&&(S[ut]=null,M[ut].disconnect(ot))}for(let et=0;et<K.added.length;et++){const ot=K.added[et];let ut=S.indexOf(ot);if(ut===-1){for(let wt=0;wt<M.length;wt++)if(wt>=S.length){S.push(ot),ut=wt;break}else if(S[wt]===null){S[wt]=ot,ut=wt;break}if(ut===-1)break}const bt=M[ut];bt&&bt.connect(ot)}}const j=new I,Q=new I;function X(K,et,ot){j.setFromMatrixPosition(et.matrixWorld),Q.setFromMatrixPosition(ot.matrixWorld);const ut=j.distanceTo(Q),bt=et.projectionMatrix.elements,wt=ot.projectionMatrix.elements,Dt=bt[14]/(bt[10]-1),_e=bt[14]/(bt[10]+1),jt=(bt[9]+1)/bt[5],xe=(bt[9]-1)/bt[5],k=(bt[8]-1)/bt[0],qe=(wt[8]+1)/wt[0],Zt=Dt*k,$t=Dt*qe,It=ut/(-k+qe),pe=It*-k;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pe),K.translateZ(It),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),bt[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Ut=Dt+It,L=_e+It,w=Zt-pe,V=$t+(ut-pe),st=jt*_e/L*Ut,J=xe*_e/L*Ut;K.projectionMatrix.makePerspective(w,V,st,J,Ut,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function rt(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let et=K.near,ot=K.far;y.texture!==null&&(y.depthNear>0&&(et=y.depthNear),y.depthFar>0&&(ot=y.depthFar)),E.near=N.near=R.near=et,E.far=N.far=R.far=ot,(O!==E.near||H!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),O=E.near,H=E.far),R.layers.mask=K.layers.mask|2,N.layers.mask=K.layers.mask|4,E.layers.mask=R.layers.mask|N.layers.mask;const ut=K.parent,bt=E.cameras;rt(E,ut);for(let wt=0;wt<bt.length;wt++)rt(bt[wt],ut);bt.length===2?X(E,R,N):E.projectionMatrix.copy(R.projectionMatrix),pt(K,E,ut)};function pt(K,et,ot){ot===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(ot.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ja*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&_===null))return c},this.setFoveation=function(K){c=K,p!==null&&(p.fixedFoveation=K),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)};let lt=null;function Et(K,et){if(d=et.getViewerPose(h||o),x=et,d!==null){const ot=d.views;_!==null&&(t.setRenderTargetFramebuffer(b,_.framebuffer),t.setRenderTarget(b));let ut=!1;ot.length!==E.cameras.length&&(E.cameras.length=0,ut=!0);for(let wt=0;wt<ot.length;wt++){const Dt=ot[wt];let _e=null;if(_!==null)_e=_.getViewport(Dt);else{const xe=f.getViewSubImage(p,Dt);_e=xe.viewport,wt===0&&(t.setRenderTargetTextures(b,xe.colorTexture,p.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(b))}let jt=T[wt];jt===void 0&&(jt=new ln,jt.layers.enable(wt),jt.viewport=new we,T[wt]=jt),jt.matrix.fromArray(Dt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Dt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(_e.x,_e.y,_e.width,_e.height),wt===0&&(E.matrix.copy(jt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ut===!0&&E.cameras.push(jt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const wt=f.getDepthInformation(ot[0]);wt&&wt.isValid&&wt.texture&&y.init(t,wt,s.renderState)}}for(let ot=0;ot<M.length;ot++){const ut=S[ot],bt=M[ot];ut!==null&&bt!==void 0&&bt.update(ut,et,h||o)}lt&&lt(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),x=null}const zt=new au;zt.setAnimationLoop(Et),this.setAnimationLoop=function(K){lt=K},this.dispose=function(){}}}const yi=new Mn,Y0=new fe;function j0(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,su(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,b,M,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&_(m,u,S)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),y(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,b,M):u.isSpriteMaterial?h(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Je&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Je&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const b=t.get(u),M=b.envMap,S=b.envMapRotation;M&&(m.envMap.value=M,yi.copy(S),yi.x*=-1,yi.y*=-1,yi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(yi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,b,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=M*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function _(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Je&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const b=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Z0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){const S=M.program;n.uniformBlockBinding(b,S)}function h(b,M){let S=s[b.id];S===void 0&&(x(b),S=d(b),s[b.id]=S,b.addEventListener("dispose",m));const U=M.program;n.updateUBOMapping(b,U);const P=t.render.frame;r[b.id]!==P&&(p(b),r[b.id]=P)}function d(b){const M=f();b.__bindingPointIndex=M;const S=i.createBuffer(),U=b.__size,P=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,U,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const M=s[b.id],S=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,R=S.length;P<R;P++){const N=Array.isArray(S[P])?S[P]:[S[P]];for(let T=0,E=N.length;T<E;T++){const O=N[T];if(_(O,P,T,U)===!0){const H=O.__offset,G=Array.isArray(O.value)?O.value:[O.value];let Y=0;for(let Z=0;Z<G.length;Z++){const j=G[Z],Q=y(j);typeof j=="number"||typeof j=="boolean"?(O.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,H+Y,O.__data)):j.isMatrix3?(O.__data[0]=j.elements[0],O.__data[1]=j.elements[1],O.__data[2]=j.elements[2],O.__data[3]=0,O.__data[4]=j.elements[3],O.__data[5]=j.elements[4],O.__data[6]=j.elements[5],O.__data[7]=0,O.__data[8]=j.elements[6],O.__data[9]=j.elements[7],O.__data[10]=j.elements[8],O.__data[11]=0):(j.toArray(O.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(b,M,S,U){const P=b.value,R=M+"_"+S;if(U[R]===void 0)return typeof P=="number"||typeof P=="boolean"?U[R]=P:U[R]=P.clone(),!0;{const N=U[R];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return U[R]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function x(b){const M=b.uniforms;let S=0;const U=16;for(let R=0,N=M.length;R<N;R++){const T=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,O=T.length;E<O;E++){const H=T[E],G=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,Z=G.length;Y<Z;Y++){const j=G[Y],Q=y(j),X=S%U,rt=X%Q.boundary,pt=X+rt;S+=rt,pt!==0&&U-pt<Q.storage&&(S+=U-pt),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=Q.storage}}}const P=S%U;return P>0&&(S+=U-P),b.__size=S,b.__cache={},this}function y(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function u(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:h,dispose:u}}class $0{constructor(t={}){const{canvas:e=Bf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const x=new Uint32Array(4),y=new Int32Array(4);let m=null,u=null;const b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=ai,this.toneMappingExposure=1;const S=this;let U=!1,P=0,R=0,N=null,T=-1,E=null;const O=new we,H=new we;let G=null;const Y=new Jt(0);let Z=0,j=e.width,Q=e.height,X=1,rt=null,pt=null;const lt=new we(0,0,j,Q),Et=new we(0,0,j,Q);let zt=!1;const K=new wc;let et=!1,ot=!1;const ut=new fe,bt=new fe,wt=new I,Dt=new we,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function xe(){return N===null?X:1}let k=n;function qe(A,B){return e.getContext(A,B)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_c}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),k===null){const B="webgl2";if(k=qe(B,A),k===null)throw qe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Zt,$t,It,pe,Ut,L,w,V,st,J,nt,Pt,_t,yt,Qt,ct,St,Nt,Ot,Mt,Kt,Vt,le,F;function ft(){Zt=new e_(k),Zt.init(),Vt=new k0(k,Zt),$t=new Zg(k,Zt,t,Vt),It=new F0(k,Zt),$t.reverseDepthBuffer&&p&&It.buffers.depth.setReversed(!0),pe=new s_(k),Ut=new M0,L=new z0(k,Zt,It,Ut,$t,Vt,pe),w=new Kg(S),V=new t_(S),st=new up(k),le=new Yg(k,st),J=new n_(k,st,pe,le),nt=new o_(k,J,st,pe),Ot=new r_(k,$t,L),ct=new $g(Ut),Pt=new S0(S,w,V,Zt,$t,le,ct),_t=new j0(S,Ut),yt=new b0,Qt=new P0(Zt),Nt=new qg(S,w,V,It,nt,_,c),St=new N0(S,nt,$t),F=new Z0(k,pe,$t,It),Mt=new jg(k,Zt,pe),Kt=new i_(k,Zt,pe),pe.programs=Pt.programs,S.capabilities=$t,S.extensions=Zt,S.properties=Ut,S.renderLists=yt,S.shadowMap=St,S.state=It,S.info=pe}ft();const $=new q0(S,k);this.xr=$,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=Zt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Zt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(j,Q,!1))},this.getSize=function(A){return A.set(j,Q)},this.setSize=function(A,B,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,Q=B,e.width=Math.floor(A*X),e.height=Math.floor(B*X),W===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(j*X,Q*X).floor()},this.setDrawingBufferSize=function(A,B,W){j=A,Q=B,X=W,e.width=Math.floor(A*W),e.height=Math.floor(B*W),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(lt)},this.setViewport=function(A,B,W,q){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,B,W,q),It.viewport(O.copy(lt).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Et)},this.setScissor=function(A,B,W,q){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,B,W,q),It.scissor(H.copy(Et).multiplyScalar(X).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(A){It.setScissorTest(zt=A)},this.setOpaqueSort=function(A){rt=A},this.setTransparentSort=function(A){pt=A},this.getClearColor=function(A){return A.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(A=!0,B=!0,W=!0){let q=0;if(A){let z=!1;if(N!==null){const ht=N.texture.format;z=ht===Ec||ht===Mc||ht===Sc}if(z){const ht=N.texture.type,gt=ht===Wn||ht===Li||ht===Us||ht===ls||ht===xc||ht===yc,Tt=Nt.getClearColor(),At=Nt.getClearAlpha(),Ft=Tt.r,Ht=Tt.g,Ct=Tt.b;gt?(x[0]=Ft,x[1]=Ht,x[2]=Ct,x[3]=At,k.clearBufferuiv(k.COLOR,0,x)):(y[0]=Ft,y[1]=Ht,y[2]=Ct,y[3]=At,k.clearBufferiv(k.COLOR,0,y))}else q|=k.COLOR_BUFFER_BIT}B&&(q|=k.DEPTH_BUFFER_BIT),W&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),yt.dispose(),Qt.dispose(),Ut.dispose(),w.dispose(),V.dispose(),nt.dispose(),le.dispose(),F.dispose(),Pt.dispose(),$.dispose(),$.removeEventListener("sessionstart",di),$.removeEventListener("sessionend",$s),En.stop()};function it(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const A=pe.autoReset,B=St.enabled,W=St.autoUpdate,q=St.needsUpdate,z=St.type;ft(),pe.autoReset=A,St.enabled=B,St.autoUpdate=W,St.needsUpdate=q,St.type=z}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function kt(A){const B=A.target;B.removeEventListener("dispose",kt),ve(B)}function ve(A){De(A),Ut.remove(A)}function De(A){const B=Ut.get(A).programs;B!==void 0&&(B.forEach(function(W){Pt.releaseProgram(W)}),A.isShaderMaterial&&Pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,W,q,z,ht){B===null&&(B=_e);const gt=z.isMesh&&z.matrixWorld.determinant()<0,Tt=uo(A,B,W,q,z);It.setMaterial(q,gt);let At=W.index,Ft=1;if(q.wireframe===!0){if(At=J.getWireframeAttribute(W),At===void 0)return;Ft=2}const Ht=W.drawRange,Ct=W.attributes.position;let Wt=Ht.start*Ft,ae=(Ht.start+Ht.count)*Ft;ht!==null&&(Wt=Math.max(Wt,ht.start*Ft),ae=Math.min(ae,(ht.start+ht.count)*Ft)),At!==null?(Wt=Math.max(Wt,0),ae=Math.min(ae,At.count)):Ct!=null&&(Wt=Math.max(Wt,0),ae=Math.min(ae,Ct.count));const te=ae-Wt;if(te<0||te===1/0)return;le.setup(z,q,Tt,W,At);let Oe,ne=Mt;if(At!==null&&(Oe=st.get(At),ne=Kt,ne.setIndex(Oe)),z.isMesh)q.wireframe===!0?(It.setLineWidth(q.wireframeLinewidth*xe()),ne.setMode(k.LINES)):ne.setMode(k.TRIANGLES);else if(z.isLine){let Lt=q.linewidth;Lt===void 0&&(Lt=1),It.setLineWidth(Lt*xe()),z.isLineSegments?ne.setMode(k.LINES):z.isLineLoop?ne.setMode(k.LINE_LOOP):ne.setMode(k.LINE_STRIP)}else z.isPoints?ne.setMode(k.POINTS):z.isSprite&&ne.setMode(k.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ne.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))ne.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Lt=z._multiDrawStarts,fn=z._multiDrawCounts,ie=z._multiDrawCount,Ye=At?st.get(At).bytesPerElement:1,qn=Ut.get(q).currentProgram.getUniforms();for(let je=0;je<ie;je++)qn.setValue(k,"_gl_DrawID",je),ne.render(Lt[je]/Ye,fn[je])}else if(z.isInstancedMesh)ne.renderInstances(Wt,te,z.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,fn=Math.min(W.instanceCount,Lt);ne.renderInstances(Wt,te,fn)}else ne.render(Wt,te)};function re(A,B,W){A.transparent===!0&&A.side===_n&&A.forceSinglePass===!1?(A.side=Je,A.needsUpdate=!0,Fi(A,B,W),A.side=hi,A.needsUpdate=!0,Fi(A,B,W),A.side=_n):Fi(A,B,W)}this.compile=function(A,B,W=null){W===null&&(W=A),u=Qt.get(W),u.init(B),M.push(u),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),A!==W&&A.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights();const q=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ht=z.material;if(ht)if(Array.isArray(ht))for(let gt=0;gt<ht.length;gt++){const Tt=ht[gt];re(Tt,W,z),q.add(Tt)}else re(ht,W,z),q.add(ht)}),M.pop(),u=null,q},this.compileAsync=function(A,B,W=null){const q=this.compile(A,B,W);return new Promise(z=>{function ht(){if(q.forEach(function(gt){Ut.get(gt).currentProgram.isReady()&&q.delete(gt)}),q.size===0){z(A);return}setTimeout(ht,10)}Zt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let sn=null;function dn(A){sn&&sn(A)}function di(){En.stop()}function $s(){En.start()}const En=new au;En.setAnimationLoop(dn),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(A){sn=A,$.setAnimationLoop(A),A===null?En.stop():En.start()},$.addEventListener("sessionstart",di),$.addEventListener("sessionend",$s),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,B,N),u=Qt.get(A,M.length),u.init(B),M.push(u),bt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(bt),ot=this.localClippingEnabled,et=ct.init(this.clippingPlanes,ot),m=yt.get(A,b.length),m.init(),b.push(m),$.enabled===!0&&$.isPresenting===!0){const ht=S.xr.getDepthSensingMesh();ht!==null&&gs(ht,B,-1/0,S.sortObjects)}gs(A,B,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(rt,pt),jt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,jt&&Nt.addToRenderList(m,A),this.info.render.frame++,et===!0&&ct.beginShadows();const W=u.state.shadowsArray;St.render(W,A,B),et===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(u.setupLights(),B.isArrayCamera){const ht=B.cameras;if(z.length>0)for(let gt=0,Tt=ht.length;gt<Tt;gt++){const At=ht[gt];Js(q,z,A,At)}jt&&Nt.render(A);for(let gt=0,Tt=ht.length;gt<Tt;gt++){const At=ht[gt];Ks(m,A,At,At.viewport)}}else z.length>0&&Js(q,z,A,B),jt&&Nt.render(A),Ks(m,A,B);N!==null&&(L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(S,A,B),le.resetDefaultState(),T=-1,E=null,M.pop(),M.length>0?(u=M[M.length-1],et===!0&&ct.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function gs(A,B,W,q){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){q&&Dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(bt);const gt=nt.update(A),Tt=A.material;Tt.visible&&m.push(A,gt,Tt,W,Dt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const gt=nt.update(A),Tt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Dt.copy(A.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Dt.copy(gt.boundingSphere.center)),Dt.applyMatrix4(A.matrixWorld).applyMatrix4(bt)),Array.isArray(Tt)){const At=gt.groups;for(let Ft=0,Ht=At.length;Ft<Ht;Ft++){const Ct=At[Ft],Wt=Tt[Ct.materialIndex];Wt&&Wt.visible&&m.push(A,gt,Wt,W,Dt.z,Ct)}}else Tt.visible&&m.push(A,gt,Tt,W,Dt.z,null)}}const ht=A.children;for(let gt=0,Tt=ht.length;gt<Tt;gt++)gs(ht[gt],B,W,q)}function Ks(A,B,W,q){const z=A.opaque,ht=A.transmissive,gt=A.transparent;u.setupLightsView(W),et===!0&&ct.setGlobalState(S.clippingPlanes,W),q&&It.viewport(O.copy(q)),z.length>0&&Oi(z,B,W),ht.length>0&&Oi(ht,B,W),gt.length>0&&Oi(gt,B,W),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Js(A,B,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new Di(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?Xs:Wn,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const ht=u.state.transmissionRenderTarget[q.id],gt=q.viewport||O;ht.setSize(gt.z,gt.w);const Tt=S.getRenderTarget();S.setRenderTarget(ht),S.getClearColor(Y),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),jt&&Nt.render(W);const At=S.toneMapping;S.toneMapping=ai;const Ft=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),et===!0&&ct.setGlobalState(S.clippingPlanes,q),Oi(A,W,q),L.updateMultisampleRenderTarget(ht),L.updateRenderTargetMipmap(ht),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ct=0,Wt=B.length;Ct<Wt;Ct++){const ae=B[Ct],te=ae.object,Oe=ae.geometry,ne=ae.material,Lt=ae.group;if(ne.side===_n&&te.layers.test(q.layers)){const fn=ne.side;ne.side=Je,ne.needsUpdate=!0,Qs(te,W,q,Oe,ne,Lt),ne.side=fn,ne.needsUpdate=!0,Ht=!0}}Ht===!0&&(L.updateMultisampleRenderTarget(ht),L.updateRenderTargetMipmap(ht))}S.setRenderTarget(Tt),S.setClearColor(Y,Z),Ft!==void 0&&(q.viewport=Ft),S.toneMapping=At}function Oi(A,B,W){const q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ht=A.length;z<ht;z++){const gt=A[z],Tt=gt.object,At=gt.geometry,Ft=q===null?gt.material:q,Ht=gt.group;Tt.layers.test(W.layers)&&Qs(Tt,B,W,At,Ft,Ht)}}function Qs(A,B,W,q,z,ht){A.onBeforeRender(S,B,W,q,z,ht),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(S,B,W,q,A,ht),z.transparent===!0&&z.side===_n&&z.forceSinglePass===!1?(z.side=Je,z.needsUpdate=!0,S.renderBufferDirect(W,B,q,z,A,ht),z.side=hi,z.needsUpdate=!0,S.renderBufferDirect(W,B,q,z,A,ht),z.side=_n):S.renderBufferDirect(W,B,q,z,A,ht),A.onAfterRender(S,B,W,q,z,ht)}function Fi(A,B,W){B.isScene!==!0&&(B=_e);const q=Ut.get(A),z=u.state.lights,ht=u.state.shadowsArray,gt=z.state.version,Tt=Pt.getParameters(A,z.state,ht,B,W),At=Pt.getProgramCacheKey(Tt);let Ft=q.programs;q.environment=A.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(A.isMeshStandardMaterial?V:w).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Ft===void 0&&(A.addEventListener("dispose",kt),Ft=new Map,q.programs=Ft);let Ht=Ft.get(At);if(Ht!==void 0){if(q.currentProgram===Ht&&q.lightsStateVersion===gt)return bn(A,Tt),Ht}else Tt.uniforms=Pt.getUniforms(A),A.onBeforeCompile(Tt,S),Ht=Pt.acquireProgram(Tt,At),Ft.set(At,Ht),q.uniforms=Tt.uniforms;const Ct=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ct.clippingPlanes=ct.uniform),bn(A,Tt),q.needsLights=po(A),q.lightsStateVersion=gt,q.needsLights&&(Ct.ambientLightColor.value=z.state.ambient,Ct.lightProbe.value=z.state.probe,Ct.directionalLights.value=z.state.directional,Ct.directionalLightShadows.value=z.state.directionalShadow,Ct.spotLights.value=z.state.spot,Ct.spotLightShadows.value=z.state.spotShadow,Ct.rectAreaLights.value=z.state.rectArea,Ct.ltc_1.value=z.state.rectAreaLTC1,Ct.ltc_2.value=z.state.rectAreaLTC2,Ct.pointLights.value=z.state.point,Ct.pointLightShadows.value=z.state.pointShadow,Ct.hemisphereLights.value=z.state.hemi,Ct.directionalShadowMap.value=z.state.directionalShadowMap,Ct.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ct.spotShadowMap.value=z.state.spotShadowMap,Ct.spotLightMatrix.value=z.state.spotLightMatrix,Ct.spotLightMap.value=z.state.spotLightMap,Ct.pointShadowMap.value=z.state.pointShadowMap,Ct.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Ht,q.uniformsList=null,Ht}function _s(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Gr.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function bn(A,B){const W=Ut.get(A);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function uo(A,B,W,q,z){B.isScene!==!0&&(B=_e),L.resetTextureUnits();const ht=B.fog,gt=q.isMeshStandardMaterial?B.environment:null,Tt=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ds,At=(q.isMeshStandardMaterial?V:w).get(q.envMap||gt),Ft=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ct=!!W.morphAttributes.position,Wt=!!W.morphAttributes.normal,ae=!!W.morphAttributes.color;let te=ai;q.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(te=S.toneMapping);const Oe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=Oe!==void 0?Oe.length:0,Lt=Ut.get(q),fn=u.state.lights;if(et===!0&&(ot===!0||A!==E)){const Fe=A===E&&q.id===T;ct.setState(q,A,Fe)}let ie=!1;q.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==fn.state.version||Lt.outputColorSpace!==Tt||z.isBatchedMesh&&Lt.batching===!1||!z.isBatchedMesh&&Lt.batching===!0||z.isBatchedMesh&&Lt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Lt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Lt.instancing===!1||!z.isInstancedMesh&&Lt.instancing===!0||z.isSkinnedMesh&&Lt.skinning===!1||!z.isSkinnedMesh&&Lt.skinning===!0||z.isInstancedMesh&&Lt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Lt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Lt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Lt.instancingMorph===!1&&z.morphTexture!==null||Lt.envMap!==At||q.fog===!0&&Lt.fog!==ht||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ct.numPlanes||Lt.numIntersection!==ct.numIntersection)||Lt.vertexAlphas!==Ft||Lt.vertexTangents!==Ht||Lt.morphTargets!==Ct||Lt.morphNormals!==Wt||Lt.morphColors!==ae||Lt.toneMapping!==te||Lt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Lt.__version=q.version);let Ye=Lt.currentProgram;ie===!0&&(Ye=Fi(q,B,z));let qn=!1,je=!1,Yn=!1;const oe=Ye.getUniforms(),Ge=Lt.uniforms;if(It.useProgram(Ye.program)&&(qn=!0,je=!0,Yn=!0),q.id!==T&&(T=q.id,je=!0),qn||E!==A){It.buffers.depth.getReversed()?(ut.copy(A.projectionMatrix),kf(ut),Hf(ut),oe.setValue(k,"projectionMatrix",ut)):oe.setValue(k,"projectionMatrix",A.projectionMatrix),oe.setValue(k,"viewMatrix",A.matrixWorldInverse);const wn=oe.map.cameraPosition;wn!==void 0&&wn.setValue(k,wt.setFromMatrixPosition(A.matrixWorld)),$t.logarithmicDepthBuffer&&oe.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&oe.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,je=!0,Yn=!0)}if(z.isSkinnedMesh){oe.setOptional(k,z,"bindMatrix"),oe.setOptional(k,z,"bindMatrixInverse");const Fe=z.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),oe.setValue(k,"boneTexture",Fe.boneTexture,L))}z.isBatchedMesh&&(oe.setOptional(k,z,"batchingTexture"),oe.setValue(k,"batchingTexture",z._matricesTexture,L),oe.setOptional(k,z,"batchingIdTexture"),oe.setValue(k,"batchingIdTexture",z._indirectTexture,L),oe.setOptional(k,z,"batchingColorTexture"),z._colorsTexture!==null&&oe.setValue(k,"batchingColorTexture",z._colorsTexture,L));const fi=W.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&Ot.update(z,W,Ye),(je||Lt.receiveShadow!==z.receiveShadow)&&(Lt.receiveShadow=z.receiveShadow,oe.setValue(k,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ge.envMap.value=At,Ge.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Ge.envMapIntensity.value=B.environmentIntensity),je&&(oe.setValue(k,"toneMappingExposure",S.toneMappingExposure),Lt.needsLights&&fo(Ge,Yn),ht&&q.fog===!0&&_t.refreshFogUniforms(Ge,ht),_t.refreshMaterialUniforms(Ge,q,X,Q,u.state.transmissionRenderTarget[A.id]),Gr.upload(k,_s(Lt),Ge,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Gr.upload(k,_s(Lt),Ge,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&oe.setValue(k,"center",z.center),oe.setValue(k,"modelViewMatrix",z.modelViewMatrix),oe.setValue(k,"normalMatrix",z.normalMatrix),oe.setValue(k,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Fe=q.uniformsGroups;for(let wn=0,Tn=Fe.length;wn<Tn;wn++){const tr=Fe[wn];F.update(tr,Ye),F.bind(tr,Ye)}}return Ye}function fo(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function po(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,B,W){Ut.get(A.texture).__webglTexture=B,Ut.get(A.depthTexture).__webglTexture=W;const q=Ut.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const W=Ut.get(A);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,W=0){N=A,P=B,R=W;let q=!0,z=null,ht=!1,gt=!1;if(A){const At=Ut.get(A);if(At.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(At.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(At.__hasExternalTextures)L.rebindTextures(A,Ut.get(A.texture).__webglTexture,Ut.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ct=A.depthTexture;if(At.__boundDepthTexture!==Ct){if(Ct!==null&&Ut.has(Ct)&&(A.width!==Ct.image.width||A.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Ft=A.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(gt=!0);const Ht=Ut.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[B])?z=Ht[B][W]:z=Ht[B],ht=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?z=Ut.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?z=Ht[W]:z=Ht,O.copy(A.viewport),H.copy(A.scissor),G=A.scissorTest}else O.copy(lt).multiplyScalar(X).floor(),H.copy(Et).multiplyScalar(X).floor(),G=zt;if(It.bindFramebuffer(k.FRAMEBUFFER,z)&&q&&It.drawBuffers(A,z),It.viewport(O),It.scissor(H),It.setScissorTest(G),ht){const At=Ut.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,At.__webglTexture,W)}else if(gt){const At=Ut.get(A.texture),Ft=B||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,At.__webglTexture,W||0,Ft)}T=-1},this.readRenderTargetPixels=function(A,B,W,q,z,ht,gt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Ut.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){It.bindFramebuffer(k.FRAMEBUFFER,Tt);try{const At=A.texture,Ft=At.format,Ht=At.type;if(!$t.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-q&&W>=0&&W<=A.height-z&&k.readPixels(B,W,q,z,Vt.convert(Ft),Vt.convert(Ht),ht)}finally{const At=N!==null?Ut.get(N).__webglFramebuffer:null;It.bindFramebuffer(k.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(A,B,W,q,z,ht,gt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Ut.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){const At=A.texture,Ft=At.format,Ht=At.type;if(!$t.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-q&&W>=0&&W<=A.height-z){It.bindFramebuffer(k.FRAMEBUFFER,Tt);const Ct=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ct),k.bufferData(k.PIXEL_PACK_BUFFER,ht.byteLength,k.STREAM_READ),k.readPixels(B,W,q,z,Vt.convert(Ft),Vt.convert(Ht),0);const Wt=N!==null?Ut.get(N).__webglFramebuffer:null;It.bindFramebuffer(k.FRAMEBUFFER,Wt);const ae=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await zf(k,ae,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ct),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ht),k.deleteBuffer(Ct),k.deleteSync(ae),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,W=0){A.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-W),z=Math.floor(A.image.width*q),ht=Math.floor(A.image.height*q),gt=B!==null?B.x:0,Tt=B!==null?B.y:0;L.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,gt,Tt,z,ht),It.unbindTexture()},this.copyTextureToTexture=function(A,B,W=null,q=null,z=0){A.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],B=arguments[2],z=arguments[3]||0,W=null);let ht,gt,Tt,At,Ft,Ht,Ct,Wt,ae;const te=A.isCompressedTexture?A.mipmaps[z]:A.image;W!==null?(ht=W.max.x-W.min.x,gt=W.max.y-W.min.y,Tt=W.isBox3?W.max.z-W.min.z:1,At=W.min.x,Ft=W.min.y,Ht=W.isBox3?W.min.z:0):(ht=te.width,gt=te.height,Tt=te.depth||1,At=0,Ft=0,Ht=0),q!==null?(Ct=q.x,Wt=q.y,ae=q.z):(Ct=0,Wt=0,ae=0);const Oe=Vt.convert(B.format),ne=Vt.convert(B.type);let Lt;B.isData3DTexture?(L.setTexture3D(B,0),Lt=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),Lt=k.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),Lt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);const fn=k.getParameter(k.UNPACK_ROW_LENGTH),ie=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ye=k.getParameter(k.UNPACK_SKIP_PIXELS),qn=k.getParameter(k.UNPACK_SKIP_ROWS),je=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,te.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,te.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,At),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ft),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ht);const Yn=A.isDataArrayTexture||A.isData3DTexture,oe=B.isDataArrayTexture||B.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Ge=Ut.get(A),fi=Ut.get(B),Fe=Ut.get(Ge.__renderTarget),wn=Ut.get(fi.__renderTarget);It.bindFramebuffer(k.READ_FRAMEBUFFER,Fe.__webglFramebuffer),It.bindFramebuffer(k.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let Tn=0;Tn<Tt;Tn++)Yn&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ut.get(A).__webglTexture,z,Ht+Tn),A.isDepthTexture?(oe&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ut.get(B).__webglTexture,z,ae+Tn),k.blitFramebuffer(At,Ft,ht,gt,Ct,Wt,ht,gt,k.DEPTH_BUFFER_BIT,k.NEAREST)):oe?k.copyTexSubImage3D(Lt,z,Ct,Wt,ae+Tn,At,Ft,ht,gt):k.copyTexSubImage2D(Lt,z,Ct,Wt,ae+Tn,At,Ft,ht,gt);It.bindFramebuffer(k.READ_FRAMEBUFFER,null),It.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else oe?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Lt,z,Ct,Wt,ae,ht,gt,Tt,Oe,ne,te.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(Lt,z,Ct,Wt,ae,ht,gt,Tt,Oe,te.data):k.texSubImage3D(Lt,z,Ct,Wt,ae,ht,gt,Tt,Oe,ne,te):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,z,Ct,Wt,ht,gt,Oe,ne,te.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,z,Ct,Wt,te.width,te.height,Oe,te.data):k.texSubImage2D(k.TEXTURE_2D,z,Ct,Wt,ht,gt,Oe,ne,te);k.pixelStorei(k.UNPACK_ROW_LENGTH,fn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ie),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ye),k.pixelStorei(k.UNPACK_SKIP_ROWS,qn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,je),z===0&&B.generateMipmaps&&k.generateMipmap(Lt),It.unbindTexture()},this.copyTextureToTexture3D=function(A,B,W=null,q=null,z=0){return A.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,A=arguments[2],B=arguments[3],z=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,W,q,z)},this.initRenderTarget=function(A){Ut.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),It.unbindTexture()},this.resetState=function(){P=0,R=0,N=null,It.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class Ac{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Jt(t),this.density=e}clone(){return new Ac(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class K0 extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class to extends fs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yr=new I,jr=new I,Jl=new fe,Es=new Jr,br=new Kr,Zo=new I,Ql=new I;class Fn extends Le{constructor(t=new He,e=new to){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Yr.fromBufferAttribute(e,s-1),jr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Yr.distanceTo(jr);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;Jl.copy(s).invert(),Es.copy(t.ray).applyMatrix4(Jl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const _=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let y=_,m=x-1;y<m;y+=h){const u=d.getX(y),b=d.getX(y+1),M=wr(this,t,Es,c,u,b);M&&e.push(M)}if(this.isLineLoop){const y=d.getX(x-1),m=d.getX(_),u=wr(this,t,Es,c,y,m);u&&e.push(u)}}else{const _=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let y=_,m=x-1;y<m;y+=h){const u=wr(this,t,Es,c,y,y+1);u&&e.push(u)}if(this.isLineLoop){const y=wr(this,t,Es,c,x-1,_);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Yr.fromBufferAttribute(o,s),jr.fromBufferAttribute(o,r),e.distanceSqToSegment(Yr,jr,Zo,Ql)>n)return;Zo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Zo);if(!(c<t.near||c>t.far))return{distance:c,point:Ql.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const th=new I,eh=new I;class pu extends Fn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)th.fromBufferAttribute(e,s),eh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+th.distanceTo(eh);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Te extends He{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const d=[],f=[],p=[],_=[];let x=0;const y=[],m=n/2;let u=0;b(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(_,2));function b(){const S=new I,U=new I;let P=0;const R=(e-t)/n;for(let N=0;N<=r;N++){const T=[],E=N/r,O=E*(e-t)+t;for(let H=0;H<=s;H++){const G=H/s,Y=G*c+a,Z=Math.sin(Y),j=Math.cos(Y);U.x=O*Z,U.y=-E*n+m,U.z=O*j,f.push(U.x,U.y,U.z),S.set(Z,R,j).normalize(),p.push(S.x,S.y,S.z),_.push(G,1-E),T.push(x++)}y.push(T)}for(let N=0;N<s;N++)for(let T=0;T<r;T++){const E=y[T][N],O=y[T+1][N],H=y[T+1][N+1],G=y[T][N+1];(t>0||T!==0)&&(d.push(E,O,G),P+=3),(e>0||T!==r-1)&&(d.push(O,H,G),P+=3)}h.addGroup(u,P,0),u+=P}function M(S){const U=x,P=new Bt,R=new I;let N=0;const T=S===!0?t:e,E=S===!0?1:-1;for(let H=1;H<=s;H++)f.push(0,m*E,0),p.push(0,E,0),_.push(.5,.5),x++;const O=x;for(let H=0;H<=s;H++){const Y=H/s*c+a,Z=Math.cos(Y),j=Math.sin(Y);R.x=T*j,R.y=m*E,R.z=T*Z,f.push(R.x,R.y,R.z),p.push(0,E,0),P.x=Z*.5+.5,P.y=j*.5*E+.5,_.push(P.x,P.y),x++}for(let H=0;H<s;H++){const G=U+H,Y=O+H;S===!0?d.push(Y,Y+1,G):d.push(Y+1,Y,G),N+=3}h.addGroup(u,N,S===!0?1:2),u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class eo extends Te{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new eo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class no extends He{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),h(n),d(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const M=new I,S=new I,U=new I;for(let P=0;P<e.length;P+=3)_(e[P+0],M),_(e[P+1],S),_(e[P+2],U),c(M,S,U,b)}function c(b,M,S,U){const P=U+1,R=[];for(let N=0;N<=P;N++){R[N]=[];const T=b.clone().lerp(S,N/P),E=M.clone().lerp(S,N/P),O=P-N;for(let H=0;H<=O;H++)H===0&&N===P?R[N][H]=T:R[N][H]=T.clone().lerp(E,H/O)}for(let N=0;N<P;N++)for(let T=0;T<2*(P-N)-1;T++){const E=Math.floor(T/2);T%2===0?(p(R[N][E+1]),p(R[N+1][E]),p(R[N][E])):(p(R[N][E+1]),p(R[N+1][E+1]),p(R[N+1][E]))}}function h(b){const M=new I;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(b),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function d(){const b=new I;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];const S=m(b)/2/Math.PI+.5,U=u(b)/Math.PI+.5;o.push(S,1-U)}x(),f()}function f(){for(let b=0;b<o.length;b+=6){const M=o[b+0],S=o[b+2],U=o[b+4],P=Math.max(M,S,U),R=Math.min(M,S,U);P>.9&&R<.1&&(M<.2&&(o[b+0]+=1),S<.2&&(o[b+2]+=1),U<.2&&(o[b+4]+=1))}}function p(b){r.push(b.x,b.y,b.z)}function _(b,M){const S=b*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function x(){const b=new I,M=new I,S=new I,U=new I,P=new Bt,R=new Bt,N=new Bt;for(let T=0,E=0;T<r.length;T+=9,E+=6){b.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),S.set(r[T+6],r[T+7],r[T+8]),P.set(o[E+0],o[E+1]),R.set(o[E+2],o[E+3]),N.set(o[E+4],o[E+5]),U.copy(b).add(M).add(S).divideScalar(3);const O=m(U);y(P,E+0,b,O),y(R,E+2,M,O),y(N,E+4,S,O)}}function y(b,M,S,U){U<0&&b.x===1&&(o[M]=b.x-1),S.x===0&&S.z===0&&(o[M]=U/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.vertices,t.indices,t.radius,t.details)}}const Tr=new I,Ar=new I,$o=new I,Cr=new hn;class J0 extends He{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ds*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,h=[0,0,0],d=["a","b","c"],f=new Array(3),p={},_=[];for(let x=0;x<c;x+=3){o?(h[0]=o.getX(x),h[1]=o.getX(x+1),h[2]=o.getX(x+2)):(h[0]=x,h[1]=x+1,h[2]=x+2);const{a:y,b:m,c:u}=Cr;if(y.fromBufferAttribute(a,h[0]),m.fromBufferAttribute(a,h[1]),u.fromBufferAttribute(a,h[2]),Cr.getNormal($o),f[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(u.x*s)},${Math.round(u.y*s)},${Math.round(u.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){const M=(b+1)%3,S=f[b],U=f[M],P=Cr[d[b]],R=Cr[d[M]],N=`${S}_${U}`,T=`${U}_${S}`;T in p&&p[T]?($o.dot(p[T].normal)<=r&&(_.push(P.x,P.y,P.z),_.push(R.x,R.y,R.z)),p[T]=null):N in p||(p[N]={index0:h[b],index1:h[M],normal:$o.clone()})}}for(const x in p)if(p[x]){const{index0:y,index1:m}=p[x];Tr.fromBufferAttribute(a,y),Ar.fromBufferAttribute(a,m),_.push(Tr.x,Tr.y,Tr.z),_.push(Ar.x,Ar.y,Ar.z)}this.setAttribute("position",new Me(_,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}const Q0={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=mu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,h,d,f,p,_;if(n&&(r=sv(i,t,r,e)),i.length>80*e){a=h=i[0],c=d=i[1];for(let x=e;x<s;x+=e)f=i[x],p=i[x+1],f<a&&(a=f),p<c&&(c=p),f>h&&(h=f),p>d&&(d=p);_=Math.max(h-a,d-c),_=_!==0?32767/_:0}return Ns(r,o,e,a,c,_,0),o}};function mu(i,t,e,n,s){let r,o;if(s===mv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=nh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=nh(r,i[r],i[r+1],o);return o&&io(o,o.next)&&(Fs(o),o=o.next),o}function Ii(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(io(e,e.next)||be(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ns(i,t,e,n,s,r,o){if(!i)return;!o&&r&&lv(i,n,s,r);let a=i,c,h;for(;i.prev!==i.next;){if(c=i.prev,h=i.next,r?ev(i,n,s,r):tv(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),Fs(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=nv(Ii(i),t,e),Ns(i,t,e,n,s,r,2)):o===2&&iv(i,t,e,n,s,r):Ns(Ii(i),t,e,n,s,r,1);break}}}function tv(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,h=n.y,d=s<r?s<o?s:o:r<o?r:o,f=a<c?a<h?a:h:c<h?c:h,p=s>r?s>o?s:o:r>o?r:o,_=a>c?a>h?a:h:c>h?c:h;let x=n.next;for(;x!==t;){if(x.x>=d&&x.x<=p&&x.y>=f&&x.y<=_&&ts(s,a,r,c,o,h,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function ev(i,t,e,n){const s=i.prev,r=i,o=i.next;if(be(s,r,o)>=0)return!1;const a=s.x,c=r.x,h=o.x,d=s.y,f=r.y,p=o.y,_=a<c?a<h?a:h:c<h?c:h,x=d<f?d<p?d:p:f<p?f:p,y=a>c?a>h?a:h:c>h?c:h,m=d>f?d>p?d:p:f>p?f:p,u=$a(_,x,t,e,n),b=$a(y,m,t,e,n);let M=i.prevZ,S=i.nextZ;for(;M&&M.z>=u&&S&&S.z<=b;){if(M.x>=_&&M.x<=y&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&ts(a,d,c,f,h,p,M.x,M.y)&&be(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=_&&S.x<=y&&S.y>=x&&S.y<=m&&S!==s&&S!==o&&ts(a,d,c,f,h,p,S.x,S.y)&&be(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=u;){if(M.x>=_&&M.x<=y&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&ts(a,d,c,f,h,p,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=b;){if(S.x>=_&&S.x<=y&&S.y>=x&&S.y<=m&&S!==s&&S!==o&&ts(a,d,c,f,h,p,S.x,S.y)&&be(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function nv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!io(s,r)&&gu(s,n,n.next,r)&&Os(s,r)&&Os(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fs(n),Fs(n.next),n=i=r),n=n.next}while(n!==i);return Ii(n)}function iv(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dv(o,a)){let c=_u(o,a);o=Ii(o,o.next),c=Ii(c,c.next),Ns(o,t,e,n,s,r,0),Ns(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function sv(i,t,e,n){const s=[];let r,o,a,c,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,h=mu(i,a,c,n,!1),h===h.next&&(h.steiner=!0),s.push(uv(h));for(s.sort(rv),r=0;r<s.length;r++)e=ov(s[r],e);return e}function rv(i,t){return i.x-t.x}function ov(i,t){const e=av(i,t);if(!e)return t;const n=_u(e,i);return Ii(n,n.next),Ii(e,e.next)}function av(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,h=s.y;let d=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ts(o<h?r:n,o,c,h,o<h?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),Os(e,i)&&(f<d||f===d&&(e.x>s.x||e.x===s.x&&cv(s,e)))&&(s=e,d=f)),e=e.next;while(e!==a);return s}function cv(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function lv(i,t,e,n){let s=i;do s.z===0&&(s.z=$a(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hv(s)}function hv(i){let t,e,n,s,r,o,a,c,h=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(c=h;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(o>1);return i}function $a(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function uv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ts(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function dv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!fv(i,t)&&(Os(i,t)&&Os(t,i)&&pv(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||io(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function io(i,t){return i.x===t.x&&i.y===t.y}function gu(i,t,e,n){const s=Pr(be(i,t,e)),r=Pr(be(i,t,n)),o=Pr(be(e,n,i)),a=Pr(be(e,n,t));return!!(s!==r&&o!==a||s===0&&Rr(i,e,t)||r===0&&Rr(i,n,t)||o===0&&Rr(e,i,n)||a===0&&Rr(e,t,n))}function Rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Pr(i){return i>0?1:i<0?-1:0}function fv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Os(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function pv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _u(i,t){const e=new Ka(i.i,i.x,i.y),n=new Ka(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nh(i,t,e,n){const s=new Ka(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ka(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Cc{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Cc.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ih(t),sh(n,t);let o=t.length;e.forEach(ih);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,sh(n,e[c]);const a=Q0.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function ih(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Rc extends no{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rc(t.radius,t.detail)}}class es extends no{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new es(t.radius,t.detail)}}class Ui extends He{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let h=0;const d=[],f=new I,p=new I,_=[],x=[],y=[],m=[];for(let u=0;u<=n;u++){const b=[],M=u/n;let S=0;u===0&&o===0?S=.5/e:u===n&&c===Math.PI&&(S=-.5/e);for(let U=0;U<=e;U++){const P=U/e;f.x=-t*Math.cos(s+P*r)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(s+P*r)*Math.sin(o+M*a),x.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),m.push(P+S,1-M),b.push(h++)}d.push(b)}for(let u=0;u<n;u++)for(let b=0;b<e;b++){const M=d[u][b+1],S=d[u][b],U=d[u+1][b],P=d[u+1][b+1];(u!==0||o>0)&&_.push(M,S,P),(u!==n-1||c<Math.PI)&&_.push(S,U,P)}this.setIndex(_),this.setAttribute("position",new Me(x,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ni extends He{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],h=[],d=new I,f=new I,p=new I;for(let _=0;_<=n;_++)for(let x=0;x<=s;x++){const y=x/s*r,m=_/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),p.subVectors(f,d).normalize(),c.push(p.x,p.y,p.z),h.push(x/s),h.push(_/n)}for(let _=1;_<=n;_++)for(let x=1;x<=s;x++){const y=(s+1)*_+x-1,m=(s+1)*(_-1)+x-1,u=(s+1)*(_-1)+x,b=(s+1)*_+x;o.push(y,m,b),o.push(m,u,b)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Sn extends fs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vu extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ko=new fe,rh=new I,oh=new I;class gv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wc,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(rh),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),Ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _v extends gv{constructor(){super(new cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ah extends vu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new _v}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vv extends vu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const ch=new fe;class xv{constructor(t,e,n=0,s=1/0){this.ray=new Jr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ch.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ch),this}intersectObject(t,e=!0,n=[]){return Ja(t,this,n,e),n.sort(lh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ja(t[s],this,n,e);return n.sort(lh),n}}function lh(i,t){return i.distance-t.distance}function Ja(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ja(r[o],t,e,!0)}}class hh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xu extends Ni{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);function yv(i){const t=new $0({canvas:i,antialias:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=Bh,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=Oh;const e=new K0;e.background=new Jt(8900331),e.fog=new Ac(13164528,.018);const n=new ln(45,window.innerWidth/window.innerHeight,.1,200);n.position.set(0,2.5,4.5),n.lookAt(0,.5,0);const s=new vv(11587839,.6);e.add(s);const r=new ah(16773328,1.8);r.position.set(8,12,6),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.left=-10,r.shadow.camera.right=10,r.shadow.camera.top=10,r.shadow.camera.bottom=-10,r.shadow.camera.near=.5,r.shadow.camera.far=30,r.shadow.bias=-.001,e.add(r);const o=new ah(16771264,.4);o.position.set(-4,3,-2),e.add(o);const a=new Vn(80,80),c=new Sn({color:4885567,roughness:.9,metalness:0}),h=new at(a,c);h.rotation.x=-Math.PI/2,h.position.y=-1.2,h.receiveShadow=!0,e.add(h);const d=Sv();d.position.set(0,-1.2,0),e.add(d);const f=[[-8,0,-10],[-5,0,-14],[0,0,-16],[6,0,-12],[10,0,-14],[-12,0,-8],[13,0,-10],[-3,0,-18],[9,0,-18],[-10,0,-16]];for(const[b,,M]of f){const S=Mv(.8+Math.random()*.6);S.position.set(b,-1.2,M),S.castShadow=!0,e.add(S)}const p=new Vn(3.5,2.5),_=new Sn({color:13386820,roughness:.95,metalness:0}),x=new at(p,_);x.rotation.x=-Math.PI/2,x.position.set(-4.5,-1.19,2),x.rotation.z=.3,x.receiveShadow=!0,e.add(x);for(let b=0;b<5;b++){const M=new Vn(3.5,.25),S=new Sn({color:15658734,roughness:.95}),U=new at(M,S);U.rotation.x=-Math.PI/2,U.position.set(-4.5,-1.185,2+(b-2)*.5),U.rotation.z=.3,e.add(U)}const y=new Ui(80,32,16,0,Math.PI*2,0,Math.PI/2),m=new Xn({side:Je,depthWrite:!1,uniforms:{topColor:{value:new Jt(4886745)},bottomColor:{value:new Jt(13164784)}},vertexShader:`
      varying float vY;
      void main() {
        vY = normalize(position).y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      varying float vY;
      void main() {
        float t = pow(max(vY, 0.0), 0.6);
        gl_FragColor = vec4(mix(bottomColor, topColor, t), 1.0);
      }
    `}),u=new at(y,m);u.position.y=-1.2,e.add(u);for(let b=0;b<8;b++){const M=Ev();M.position.set((Math.random()-.5)*60,18+Math.random()*10,-20-Math.random()*30),M.scale.setScalar(3+Math.random()*4),e.add(M)}return window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}),{renderer:t,scene:e,camera:n}}function Sv(){const i=new un,t=9136404,e=new Sn({color:t,roughness:.85,metalness:0}),n=.75;for(let r=0;r<5;r++){const o=new at(new ge(3,.06,.28),e);o.position.set(0,n,-.56+r*.29),o.castShadow=!0,o.receiveShadow=!0,i.add(o)}for(const r of[-.2,.2]){const o=new at(new ge(2.2,.06,.08),e);o.position.set(0,n-.05,r),i.add(o)}const s=e;for(const r of[-1,1]){const o=r*1,a=new at(new ge(.08,.85,.06),s);a.position.set(o,n-.45,0),a.rotation.z=r*.15,a.castShadow=!0,i.add(a);const c=new at(new ge(3,.06,.3),e);c.position.set(0,n-.35,r*.65),c.castShadow=!0,c.receiveShadow=!0,i.add(c);const h=new at(new ge(.08,.45,.06),s);h.position.set(o,n-.6,r*.65),h.rotation.z=r*.12,h.castShadow=!0,i.add(h)}return i}function Mv(i=1){const t=new un,e=new Te(.15*i,.2*i,2*i,8),n=new Sn({color:7029286,roughness:.9}),s=new at(e,n);s.position.y=1*i,s.castShadow=!0,t.add(s);const r=new Sn({color:2980397,roughness:.85}),o=[{y:2.2,r:1.1,h:1.4},{y:3,r:.85,h:1.2},{y:3.7,r:.6,h:1}];for(const{y:a,r:c,h}of o){const d=new eo(c*i,h*i,8),f=new at(d,r);f.position.y=a*i,f.castShadow=!0,t.add(f)}return t}function Ev(){const i=new un,t=new Sn({color:16777215,roughness:1,metalness:0,transparent:!0,opacity:.85}),e=[{x:0,y:0,z:0,r:.5},{x:.4,y:.1,z:0,r:.4},{x:-.35,y:.05,z:.1,r:.35},{x:.15,y:.15,z:-.1,r:.3},{x:-.1,y:-.05,z:.15,r:.25}];for(const{x:n,y:s,z:r,r:o}of e){const a=new Ui(o,8,6),c=new at(a,t);c.position.set(n,s,r),i.add(c)}return i}const bv=1/3,An=1/6,Jo=i=>Math.floor(i)|0,Qo=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function wv(i=Math.random){const t=Tv(i),e=new Float64Array(t).map(r=>Qo[r%12*3]),n=new Float64Array(t).map(r=>Qo[r%12*3+1]),s=new Float64Array(t).map(r=>Qo[r%12*3+2]);return function(o,a,c){let h,d,f,p;const _=(o+a+c)*bv,x=Jo(o+_),y=Jo(a+_),m=Jo(c+_),u=(x+y+m)*An,b=x-u,M=y-u,S=m-u,U=o-b,P=a-M,R=c-S;let N,T,E,O,H,G;U>=P?P>=R?(N=1,T=0,E=0,O=1,H=1,G=0):U>=R?(N=1,T=0,E=0,O=1,H=0,G=1):(N=0,T=0,E=1,O=1,H=0,G=1):P<R?(N=0,T=0,E=1,O=0,H=1,G=1):U<R?(N=0,T=1,E=0,O=0,H=1,G=1):(N=0,T=1,E=0,O=1,H=1,G=0);const Y=U-N+An,Z=P-T+An,j=R-E+An,Q=U-O+2*An,X=P-H+2*An,rt=R-G+2*An,pt=U-1+3*An,lt=P-1+3*An,Et=R-1+3*An,zt=x&255,K=y&255,et=m&255;let ot=.6-U*U-P*P-R*R;if(ot<0)h=0;else{const Dt=zt+t[K+t[et]];ot*=ot,h=ot*ot*(e[Dt]*U+n[Dt]*P+s[Dt]*R)}let ut=.6-Y*Y-Z*Z-j*j;if(ut<0)d=0;else{const Dt=zt+N+t[K+T+t[et+E]];ut*=ut,d=ut*ut*(e[Dt]*Y+n[Dt]*Z+s[Dt]*j)}let bt=.6-Q*Q-X*X-rt*rt;if(bt<0)f=0;else{const Dt=zt+O+t[K+H+t[et+G]];bt*=bt,f=bt*bt*(e[Dt]*Q+n[Dt]*X+s[Dt]*rt)}let wt=.6-pt*pt-lt*lt-Et*Et;if(wt<0)p=0;else{const Dt=zt+1+t[K+1+t[et+1]];wt*=wt,p=wt*wt*(e[Dt]*pt+n[Dt]*lt+s[Dt]*Et)}return 32*(h+d+f+p)}}function Tv(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const s=n+~~(i()*(256-n)),r=e[n];e[n]=e[s],e[s]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}function yu(i){let t=i|0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Av(i=Math.random()){const t=yu(i*2147483647),e=wv(t),n=new Rc(1,6);n.deleteAttribute("uv");const s=n.getAttribute("position"),r=t(),o=[1,1,1],a=Math.floor(t()*3),c=[0,1,2].filter(U=>U!==a);if(r<.25){o[a]=1.7+t()*.5;for(const U of c)o[U]=.45+t()*.15}else if(r<.45){o[a]=.85+t()*.2;for(const U of c)o[U]=.8+t()*.25}else if(r<.65)o[a]=1.2+t()*.3,o[c[0]]=1+t()*.3,o[c[1]]=.45+t()*.15;else if(r<.82){o[a]=1.3+t()*.4;for(const U of c)o[U]=.65+t()*.2}else o[a]=1.1+t()*.3,o[c[0]]=.7+t()*.3,o[c[1]]=.9+t()*.2;const h=5+Math.floor(t()*3),d=[];for(let U=0;U<h;U++){const P=t()*Math.PI*2,R=Math.acos(2*t()-1);d.push({dir:new I(Math.sin(R)*Math.cos(P),Math.sin(R)*Math.sin(P),Math.cos(R)),strength:.1+t()*.18,falloff:2+t()*2})}const f=1+Math.floor(t()*2),p=[];for(let U=0;U<f;U++){const P=t()*Math.PI*2,R=Math.acos(2*t()-1);p.push({dir:new I(Math.sin(R)*Math.cos(P),Math.sin(R)*Math.sin(P),Math.cos(R)),strength:.15+t()*.2,falloff:1.5+t()*1.5})}const _=6+Math.floor(t()*6),x=[];for(let U=0;U<_;U++){const P=t()*Math.PI*2,R=Math.acos(2*t()-1);x.push({dir:new I(Math.sin(R)*Math.cos(P),Math.sin(R)*Math.sin(P),Math.cos(R)),strength:.04+t()*.06,falloff:6+t()*6})}const y=2,m=.8,u=.4,b=.2;for(let U=0;U<s.count;U++){let P=s.getX(U),R=s.getY(U),N=s.getZ(U);P*=o[0],R*=o[1],N*=o[2];const T=Math.sqrt(P*P+R*R+N*N),E=P/T,O=R/T,H=N/T;let G=0;for(const lt of d){const Et=E*lt.dir.x+O*lt.dir.y+H*lt.dir.z,zt=Math.max(0,Et);G+=lt.strength*Math.pow(zt,lt.falloff)}let Y=0;for(const lt of x){const Et=E*lt.dir.x+O*lt.dir.y+H*lt.dir.z,zt=Math.max(0,Et);Y+=lt.strength*Math.pow(zt,lt.falloff)}let Z=0;for(const lt of p){const Et=E*lt.dir.x+O*lt.dir.y+H*lt.dir.z,zt=Math.max(0,Et);Z+=lt.strength*Math.pow(zt,lt.falloff)}let j=1,Q=m,X=0,rt=0;for(let lt=0;lt<y;lt++)X+=j*e(P*Q,R*Q,N*Q),rt+=j,j*=u,Q*=2;X/=rt;const pt=G+Y+Z+X*b;P+=E*pt,R+=O*pt,N+=H*pt,s.setXYZ(U,P,R,N)}n.computeVertexNormals();const M=new Sn({color:12882778,roughness:.75,metalness:.02}),S=new at(n,M);return S.name="potato",S.scale.setScalar(.25),S}function Cv(){const i=new un;i.name="cuttingPlane";const t=new Vn(.9,.9),e=new js({color:4491519,transparent:!0,opacity:.15,side:_n,depthWrite:!1}),n=new at(t,e);i.add(n);const s=new J0(t),r=new to({color:4491519,transparent:!0,opacity:.6}),o=new pu(s,r);return i.add(o),i}function Su(i){const t=new I(0,0,1);t.applyQuaternion(i.quaternion).normalize();const e=new I;i.getWorldPosition(e);const n=new Bn;return n.setFromNormalAndCoplanarPoint(t,e),n}const uh={type:"change"},Pc={type:"start"},Mu={type:"end"},Lr=new Jr,dh=new Bn,Rv=Math.cos(70*Ff.DEG2RAD),Ie=new I,tn=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ta=1e-6;class Pv extends xu{constructor(t,e=null){super(t,e),this.state=de.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Ae,this._lastTargetPosition=new I,this._quat=new Ae().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hh,this._sphericalDelta=new hh,this._scale=1,this._panOffset=new I,this._rotateStart=new Bt,this._rotateEnd=new Bt,this._rotateDelta=new Bt,this._panStart=new Bt,this._panEnd=new Bt,this._panDelta=new Bt,this._dollyStart=new Bt,this._dollyEnd=new Bt,this._dollyDelta=new Bt,this._dollyDirection=new I,this._mouse=new Bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dv.bind(this),this._onPointerDown=Lv.bind(this),this._onPointerUp=Iv.bind(this),this._onContextMenu=kv.bind(this),this._onMouseWheel=Ov.bind(this),this._onKeyDown=Fv.bind(this),this._onTouchStart=Bv.bind(this),this._onTouchMove=zv.bind(this),this._onMouseDown=Uv.bind(this),this._onMouseMove=Nv.bind(this),this._interceptControlDown=Hv.bind(this),this._interceptControlUp=Gv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uh),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ie.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const h=new I(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lr.origin.copy(this.object.position),Lr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lr.direction))<Rv?this.object.lookAt(this.target):(dh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lr.intersectPlane(dh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ta||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ta||this._lastTargetPosition.distanceToSquared(this.target)>ta?(this.dispatchEvent(uh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ie.copy(s).sub(this.target);let r=Ie.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Lv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Dv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Iv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mu),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Uv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=de.DOLLY;break;case ns.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}break;case ns.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Pc)}function Nv(i){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ov(i){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(i.preventDefault(),this.dispatchEvent(Pc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Mu))}function Fv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Bv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=de.TOUCH_ROTATE;break;case Ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case Ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=de.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Pc)}function zv(i){switch(this._trackPointer(i),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=de.NONE}}function kv(i){this.enabled!==!1&&i.preventDefault()}function Hv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Si=new xv,Xe=new I,ti=new I,ye=new Ae,fh={X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)},ea={type:"change"},ph={type:"mouseDown",mode:null},mh={type:"mouseUp",mode:null},gh={type:"objectChange"};class Vv extends xu{constructor(t,e=null){super(void 0,e);const n=new Zv(this);this._root=n;const s=new $v;this._gizmo=s,n.add(s);const r=new Kv;this._plane=r,n.add(r);const o=this;function a(M,S){let U=S;Object.defineProperty(o,M,{get:function(){return U!==void 0?U:S},set:function(P){U!==P&&(U=P,r[M]=P,s[M]=P,o.dispatchEvent({type:M+"-changed",value:P}),o.dispatchEvent(ea))}}),o[M]=S,r[M]=S,s[M]=S}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const c=new I,h=new I,d=new Ae,f=new Ae,p=new I,_=new Ae,x=new I,y=new I,m=new I,u=0,b=new I;a("worldPosition",c),a("worldPositionStart",h),a("worldQuaternion",d),a("worldQuaternionStart",f),a("cameraPosition",p),a("cameraQuaternion",_),a("pointStart",x),a("pointEnd",y),a("rotationAxis",m),a("rotationAngle",u),a("eye",b),this._offset=new I,this._startNorm=new I,this._endNorm=new I,this._cameraScale=new I,this._parentPosition=new I,this._parentQuaternion=new Ae,this._parentQuaternionInv=new Ae,this._parentScale=new I,this._worldScaleStart=new I,this._worldQuaternionInv=new Ae,this._worldScale=new I,this._positionStart=new I,this._quaternionStart=new Ae,this._scaleStart=new I,this._getPointer=Wv.bind(this),this._onPointerDown=qv.bind(this),this._onPointerHover=Xv.bind(this),this._onPointerMove=Yv.bind(this),this._onPointerUp=jv.bind(this),e!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Si.setFromCamera(t,this.camera);const e=na(this._gizmo.picker[this.mode],Si);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Si.setFromCamera(t,this.camera);const e=na(this._plane,Si,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,ph.mode=this.mode,this.dispatchEvent(ph)}}pointerMove(t){const e=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Si.setFromCamera(t,this.camera);const o=na(this._plane,Si,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(ye.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Xe.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Xe.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ti.set(a,a,a)}else Xe.copy(this.pointStart),ti.copy(this.pointEnd),Xe.applyQuaternion(this._worldQuaternionInv),ti.applyQuaternion(this._worldQuaternionInv),ti.divide(Xe),e.search("X")===-1&&(ti.x=1),e.search("Y")===-1&&(ti.y=1),e.search("Z")===-1&&(ti.z=1);s.scale.copy(this._scaleStart).multiply(ti),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Xe.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Xe.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(fh[e]),Xe.copy(fh[e]),r==="local"&&Xe.applyQuaternion(this.worldQuaternion),Xe.cross(this.eye),Xe.length()===0?c=!0:this.rotationAngle=this._offset.dot(Xe.normalize())*a),(e==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(ye.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(ye.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(ea),this.dispatchEvent(gh)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(mh.mode=this.mode,this.dispatchEvent(mh)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(ea),this.dispatchEvent(gh),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Si}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function Wv(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function Xv(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function qv(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Yv(i){this.enabled&&this.pointerMove(this._getPointer(i))}function jv(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function na(i,t,e){const n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}const Dr=new Mn,me=new I(0,1,0),_h=new I(0,0,0),vh=new fe,Ir=new Ae,Vr=new Ae,Cn=new I,xh=new fe,Cs=new I(1,0,0),Ei=new I(0,1,0),Rs=new I(0,0,1),Ur=new I,bs=new I,ws=new I;class Zv extends Le{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class $v extends Le{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new js({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new to({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const s=e.clone();s.opacity=.5;const r=t.clone();r.color.setHex(16711680);const o=t.clone();o.color.setHex(65280);const a=t.clone();a.color.setHex(255);const c=t.clone();c.color.setHex(16711680),c.opacity=.5;const h=t.clone();h.color.setHex(65280),h.opacity=.5;const d=t.clone();d.color.setHex(255),d.opacity=.5;const f=t.clone();f.opacity=.25;const p=t.clone();p.color.setHex(16776960),p.opacity=.25,t.clone().color.setHex(16776960);const x=t.clone();x.color.setHex(7895160);const y=new Te(0,.04,.1,12);y.translate(0,.05,0);const m=new ge(.08,.08,.08);m.translate(0,.04,0);const u=new He;u.setAttribute("position",new Me([0,0,0,1,0,0],3));const b=new Te(.0075,.0075,.5,3);b.translate(0,.25,0);function M(Z,j){const Q=new ni(Z,.0075,3,64,j*Math.PI*2);return Q.rotateY(Math.PI/2),Q.rotateX(Math.PI/2),Q}function S(){const Z=new He;return Z.setAttribute("position",new Me([0,0,0,1,1,1],3)),Z}const U={X:[[new at(y,r),[.5,0,0],[0,0,-Math.PI/2]],[new at(y,r),[-.5,0,0],[0,0,Math.PI/2]],[new at(b,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new at(y,o),[0,.5,0]],[new at(y,o),[0,-.5,0],[Math.PI,0,0]],[new at(b,o)]],Z:[[new at(y,a),[0,0,.5],[Math.PI/2,0,0]],[new at(y,a),[0,0,-.5],[-Math.PI/2,0,0]],[new at(b,a),null,[Math.PI/2,0,0]]],XYZ:[[new at(new es(.1,0),f.clone()),[0,0,0]]],XY:[[new at(new ge(.15,.15,.01),d.clone()),[.15,.15,0]]],YZ:[[new at(new ge(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new at(new ge(.15,.15,.01),h.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},P={X:[[new at(new Te(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new at(new Te(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new at(new Te(.2,0,.6,4),n),[0,.3,0]],[new at(new Te(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new at(new Te(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new at(new Te(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new at(new es(.2,0),n)]],XY:[[new at(new ge(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new at(new ge(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new at(new ge(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},R={START:[[new at(new es(.01,2),s),null,null,null,"helper"]],END:[[new at(new es(.01,2),s),null,null,null,"helper"]],DELTA:[[new Fn(S(),s),null,null,null,"helper"]],X:[[new Fn(u,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Fn(u,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Fn(u,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},N={XYZE:[[new at(M(.5,1),x),null,[0,Math.PI/2,0]]],X:[[new at(M(.5,.5),r)]],Y:[[new at(M(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new at(M(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new at(M(.75,1),p),null,[0,Math.PI/2,0]]]},T={AXIS:[[new Fn(u,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},E={XYZE:[[new at(new Ui(.25,10,8),n)]],X:[[new at(new ni(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new at(new ni(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new at(new ni(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new at(new ni(.75,.1,2,24),n)]]},O={X:[[new at(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new at(b,r),[0,0,0],[0,0,-Math.PI/2]],[new at(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new at(m,o),[0,.5,0]],[new at(b,o)],[new at(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new at(m,a),[0,0,.5],[Math.PI/2,0,0]],[new at(b,a),[0,0,0],[Math.PI/2,0,0]],[new at(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new at(new ge(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new at(new ge(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new at(new ge(.15,.15,.01),h),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new at(new ge(.1,.1,.1),f.clone())]]},H={X:[[new at(new Te(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new at(new Te(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new at(new Te(.2,0,.6,4),n),[0,.3,0]],[new at(new Te(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new at(new Te(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new at(new Te(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new at(new ge(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new at(new ge(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new at(new ge(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new at(new ge(.2,.2,.2),n),[0,0,0]]]},G={X:[[new Fn(u,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Fn(u,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Fn(u,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function Y(Z){const j=new Le;for(const Q in Z)for(let X=Z[Q].length;X--;){const rt=Z[Q][X][0].clone(),pt=Z[Q][X][1],lt=Z[Q][X][2],Et=Z[Q][X][3],zt=Z[Q][X][4];rt.name=Q,rt.tag=zt,pt&&rt.position.set(pt[0],pt[1],pt[2]),lt&&rt.rotation.set(lt[0],lt[1],lt[2]),Et&&rt.scale.set(Et[0],Et[1],Et[2]),rt.updateMatrix();const K=rt.geometry.clone();K.applyMatrix4(rt.matrix),rt.geometry=K,rt.renderOrder=1/0,rt.position.set(0,0,0),rt.rotation.set(0,0,0),rt.scale.set(1,1,1),j.add(rt)}return j}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=Y(U)),this.add(this.gizmo.rotate=Y(N)),this.add(this.gizmo.scale=Y(O)),this.add(this.picker.translate=Y(P)),this.add(this.picker.rotate=Y(E)),this.add(this.picker.scale=Y(H)),this.add(this.helper.translate=Y(R)),this.add(this.helper.rotate=Y(T)),this.add(this.helper.scale=Y(G)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Vr;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(ye.setFromEuler(Dr.set(0,0,0)),o.quaternion.copy(n).multiply(ye),Math.abs(me.copy(Cs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(ye.setFromEuler(Dr.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(ye),Math.abs(me.copy(Ei).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(ye.setFromEuler(Dr.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(ye),Math.abs(me.copy(Rs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(ye.setFromEuler(Dr.set(0,Math.PI/2,0)),me.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(vh.lookAt(_h,me,Ei)),o.quaternion.multiply(ye),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Xe.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Xe.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Xe),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(me.copy(Cs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(me.copy(Ei).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(me.copy(Rs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(me.copy(Rs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(me.copy(Cs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(me.copy(Ei).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Ir.copy(n),me.copy(this.eye).applyQuaternion(ye.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(vh.lookAt(this.eye,_h,Ei)),o.name==="X"&&(ye.setFromAxisAngle(Cs,Math.atan2(-me.y,me.z)),ye.multiplyQuaternions(Ir,ye),o.quaternion.copy(ye)),o.name==="Y"&&(ye.setFromAxisAngle(Ei,Math.atan2(me.x,me.z)),ye.multiplyQuaternions(Ir,ye),o.quaternion.copy(ye)),o.name==="Z"&&(ye.setFromAxisAngle(Rs,Math.atan2(me.y,me.x)),ye.multiplyQuaternions(Ir,ye),o.quaternion.copy(ye))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(t)}}class Kv extends at{constructor(){super(new Vn(1e5,1e5,2,2),new js({visible:!1,wireframe:!0,side:_n,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Ur.copy(Cs).applyQuaternion(e==="local"?this.worldQuaternion:Vr),bs.copy(Ei).applyQuaternion(e==="local"?this.worldQuaternion:Vr),ws.copy(Rs).applyQuaternion(e==="local"?this.worldQuaternion:Vr),me.copy(bs),this.mode){case"translate":case"scale":switch(this.axis){case"X":me.copy(this.eye).cross(Ur),Cn.copy(Ur).cross(me);break;case"Y":me.copy(this.eye).cross(bs),Cn.copy(bs).cross(me);break;case"Z":me.copy(this.eye).cross(ws),Cn.copy(ws).cross(me);break;case"XY":Cn.copy(ws);break;case"YZ":Cn.copy(Ur);break;case"XZ":me.copy(ws),Cn.copy(bs);break;case"XYZ":case"E":Cn.set(0,0,0);break}break;case"rotate":default:Cn.set(0,0,0)}Cn.length()===0?this.quaternion.copy(this.cameraQuaternion):(xh.lookAt(Xe.set(0,0,0),Cn,me),this.quaternion.setFromRotationMatrix(xh)),super.updateMatrixWorld(t)}}function Jv(i,t,e){const n=new Pv(i,t.domElement);n.enableDamping=!0,n.dampingFactor=.08,n.target.set(0,0,0);const s=new Vv(i,t.domElement);s.attach(e),s.setMode("translate"),s.setSpace("local"),s.showX=!1,s.showY=!1,s.setSize(.5),s.addEventListener("dragging-changed",a=>{n.enabled=!a.value});const r=a=>{(a.key==="r"||a.key==="R")&&(s.setMode("rotate"),s.showX=!0,s.showY=!0,s.showZ=!0),(a.key==="t"||a.key==="T")&&(s.setMode("translate"),s.showX=!1,s.showY=!1)};window.addEventListener("keydown",r);function o(){window.removeEventListener("keydown",r),n.dispose(),s.detach(),s.dispose()}return{orbit:n,transform:s,dispose:o}}const yh=1e-5,Qa=1,tc=-1,Qv=0;function tx(i,t){const n=(i.index?i.toNonIndexed():i.clone()).getAttribute("position"),s=n.count/3,r=[],o=[],a=[];for(let c=0;c<s;c++){const h=c*3,d=ia(n,h),f=ia(n,h+1),p=ia(n,h+2),_=t.distanceToPoint(d),x=t.distanceToPoint(f),y=t.distanceToPoint(p),m=sa(_),u=sa(x),b=sa(y);if(m>=0&&u>=0&&b>=0){Bs(r,d,f,p);continue}if(m<=0&&u<=0&&b<=0){Bs(o,d,f,p);continue}nx([d,f,p],[_,x,y],[m,u,b],r,o,a)}return r.length===0||o.length===0?null:(ix(a,t,r,o),{front:Mh(r),back:Mh(o)})}function ia(i,t){return new I(i.getX(t),i.getY(t),i.getZ(t))}function sa(i){return i>yh?Qa:i<-yh?tc:Qv}function ex(i,t,e,n){const s=e/(e-n);return new I().lerpVectors(i,t,s)}function Bs(i,t,e,n){i.push(t.x,t.y,t.z,e.x,e.y,e.z,n.x,n.y,n.z)}function nx(i,t,e,n,s,r){const o=[],a=[],c=[];for(let h=0;h<3;h++){const d=(h+1)%3,f=e[h],p=e[d];if(f>=0&&o.push(i[h]),f<=0&&a.push(i[h]),f===Qa&&p===tc||f===tc&&p===Qa){const _=ex(i[h],i[d],t[h],t[d]);o.push(_),a.push(_.clone()),c.push(_)}}c.length===2&&r.push([c[0],c[1]]),Sh(o,n),Sh(a,s)}function Sh(i,t){for(let e=1;e<i.length-1;e++)Bs(t,i[0],i[e],i[e+1])}function ix(i,t,e,n){if(i.length===0)return;const{uniqueVerts:s,indexedEdges:r}=sx(i);if(r.length===0)return;const o=new Map;for(const[d,f]of r)d!==f&&(o.has(d)||o.set(d,[]),o.has(f)||o.set(f,[]),o.get(d).push(f),o.get(f).push(d));const a=new Set,c=[];for(const[d]of o){if(a.has(d))continue;const f=[];let p=d,_=-1,x=0;for(;x++<5e4&&!(a.has(p)&&f.length>2);){a.add(p),f.push(p);const y=o.get(p);if(!y||y.length===0)break;let m=-1;for(const u of y)if(u!==_&&!a.has(u)){m=u;break}if(m===-1){for(const u of y)if(u===f[0]&&f.length>2){m=u;break}}if(m===-1)break;_=p,p=m}f.length>=3&&c.push(f.map(y=>s[y]))}const h=t.normal.clone().normalize();for(const d of c){const f=rx(d,h);for(const[p,_,x]of f)Bs(e,p,_,x),Bs(n,x,_,p)}}function sx(i){const e=[],n=[];function s(r){for(let o=0;o<e.length;o++)if(e[o].distanceTo(r)<1e-4)return o;return e.push(r.clone()),e.length-1}for(const[r,o]of i){const a=s(r),c=s(o);a!==c&&n.push([a,c])}return{uniqueVerts:e,indexedEdges:n}}function rx(i,t){if(i.length<3)return[];if(i.length===3)return[[i[0],i[1],i[2]]];let e=new I(0,1,0);Math.abs(t.dot(e))>.9&&(e=new I(1,0,0));const n=new I().crossVectors(t,e).normalize(),s=new I().crossVectors(n,t).normalize(),r=i[0],o=i.map(h=>{const d=h.clone().sub(r);return new Bt(d.dot(n),d.dot(s))});return ox(o)<0&&(o.reverse(),i=[...i].reverse()),Cc.triangulateShape(o,[]).map(([h,d,f])=>[i[h],i[d],i[f]])}function ox(i){let t=0;for(let e=0,n=i.length-1;e<i.length;n=e++)t+=(i[n].x-i[e].x)*(i[n].y+i[e].y);return t*.5}function Mh(i){const t=new He,e=new Float32Array(i);return t.setAttribute("position",new yn(e,3)),t.computeVertexNormals(),t}function ra(i){const t=i.getAttribute("position"),e=t.count/3;let n=0;const s=new I,r=new I,o=new I,a=new I;for(let c=0;c<e;c++)s.fromBufferAttribute(t,c*3),r.fromBufferAttribute(t,c*3+1),o.fromBufferAttribute(t,c*3+2),a.crossVectors(r,o),n+=s.dot(a);return Math.abs(n)/6}function ax(i,t){const e=i+t,n=Math.min(i,t),s=Math.max(i,t),r=s>0?n/s:0,o=Math.round(Math.pow(r,.5)*100);let a;o>=99?a="PERFECT!":o>=95?a="S":o>=90?a="A":o>=80?a="B":o>=70?a="C":o>=60?a="D":a="F";const c=(i/e*100).toFixed(1),h=(t/e*100).toFixed(1);return{score:o,grade:a,ratio:r,pctA:c,pctB:h}}function cx(){const i=new un,t=new Sn({color:12623952,roughness:.3,metalness:.8}),e=new Sn({color:9072688,roughness:.4,metalness:.7}),n=new Sn({color:13938768,roughness:.35,metalness:.75}),s=new Te(.5,.6,.12,24),r=new at(s,e);r.position.y=.06,r.castShadow=!0,i.add(r);const o=new Te(.06,.08,1.6,12),a=new at(o,t);a.position.y=.92,a.castShadow=!0,i.add(a);const c=new Ui(.1,12,8),h=new at(c,t);h.position.y=1.78,i.add(h);const d=new un;d.position.y=1.7;const f=new ge(3,.06,.06),p=new at(f,t);p.castShadow=!0,d.add(p);const _=new Ui(.07,10,8),x=new at(_,e);d.add(x),i.add(d);const y=new un;y.position.y=1.7;const m=new ge(.02,.5,.02),u=new at(m,t);u.position.y=-.25,y.add(u);const b=new eo(.04,.08,6),M=new at(b,t);M.position.y=-.52,M.rotation.z=Math.PI,y.add(M),i.add(y);const S=1.35,U=.6,P=Eh(n,e);P.position.set(-S,1.7-U,0),i.add(P);const R=Eh(n,e);return R.position.set(S,1.7-U,0),i.add(R),{group:i,leftPan:P,rightPan:R,beam:d,pointer:y}}function Eh(i,t,e){const n=new un,s=new Te(.65,.55,.08,24),r=new at(s,i);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const o=new ni(.6,.025,8,24),a=new at(o,t);return a.rotation.x=Math.PI/2,a.position.y=.03,n.add(a),n}function bh(i,t){const o=t*.22;i.beam.rotation.z=-o,i.pointer.rotation.z=o*.5;const a=new I(-1.35,0,0).applyAxisAngle(new I(0,0,1),-o),c=new I(1.35,0,0).applyAxisAngle(new I(0,0,1),-o);i.leftPan.position.set(a.x,1.7+a.y-.6,0),i.rightPan.position.set(c.x,1.7+c.y-.6,0)}function wh(i){return 1-Math.pow(1-i,3)}function Th(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function lx(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375}function Nr(i,t){return new Promise(e=>{const n=performance.now();function s(){const r=Math.min((performance.now()-n)/i,1);t(r),r<1?requestAnimationFrame(s):e()}requestAnimationFrame(s)})}function oa(i){return new Promise(t=>setTimeout(t,i))}const hx=1.35,ux=.6,dx=1.7,fx=.22,px=.18;function Or(i,t,e){const n=e*fx,s=new I(t*hx,0,0).applyAxisAngle(new I(0,0,1),-n);return new I(i.position.x+s.x,i.position.y+dx+s.y-ux+px,i.position.z)}async function mx(i,t,e,n,s,r,o,a){const c=e.clone().normalize(),h=n.position.clone(),d=s.target.clone(),f=i.position.clone().add(t.position).multiplyScalar(.5),p=new I(2,1.6,2.8),_=f.clone().add(new I(0,.1,0));await Nr(500,et=>{const ot=Th(et);n.position.lerpVectors(h,p,ot),s.target.lerpVectors(d,_,ot),n.lookAt(s.target)});const x=.35,y=i.position.clone(),m=t.position.clone(),u=y.clone().add(c.clone().multiplyScalar(x)),b=m.clone().add(c.clone().multiplyScalar(-x)),M=new I(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),S=new I(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),U=i.quaternion.clone(),P=t.quaternion.clone(),R=U.clone().multiply(new Ae().setFromAxisAngle(M,.1)),N=P.clone().multiply(new Ae().setFromAxisAngle(S,-.1));await Nr(600,et=>{const ot=wh(et);i.position.lerpVectors(y,u,ot),t.position.lerpVectors(m,b,ot),i.quaternion.slerpQuaternions(U,R,ot),t.quaternion.slerpQuaternions(P,N,ot)}),await oa(250);const T=cx(),E=-1.2+.75+.03;T.group.position.set(0,E,0),T.group.scale.setScalar(0),bh(T,0),r.add(T.group);const O=new I(0,1.6,4.5),H=new I(0,.6,0),G=n.position.clone(),Y=s.target.clone(),Z=Or(T.group,-1,0),j=Or(T.group,1,0),Q=i.position.clone(),X=t.position.clone(),rt=i.quaternion.clone(),pt=t.quaternion.clone(),lt=new Ae,Et=new Ae;await Nr(900,et=>{const ot=Th(et),ut=wh(Math.min(et*2.5,1));T.group.scale.setScalar(ut),i.position.lerpVectors(Q,Z,ot),t.position.lerpVectors(X,j,ot);const bt=.3*4*ot*(1-ot);i.position.y+=bt,t.position.y+=bt,i.quaternion.slerpQuaternions(rt,lt,ot),t.quaternion.slerpQuaternions(pt,Et,ot),n.position.lerpVectors(G,O,ot),s.target.lerpVectors(Y,H,ot),n.lookAt(s.target)}),i.position.copy(Z),t.position.copy(j),await oa(300);const zt=o+a,K=(a-o)/zt;return await Nr(1e3,et=>{const ot=lx(et),ut=K*ot;bh(T,ut);const bt=Or(T.group,-1,ut),wt=Or(T.group,1,ut);i.position.copy(bt),t.position.copy(wt)}),await oa(700),T}class gx{constructor({onTick:t,onExpire:e,duration:n=10}){this.duration=n,this.remaining=n,this.running=!1,this.onTick=t,this.onExpire=e,this._rafId=null,this._lastTime=0}start(){this.remaining=this.duration,this.running=!0,this._lastTime=performance.now(),this._tick()}stop(){this.running=!1,this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null)}reset(){this.stop(),this.remaining=this.duration,this.onTick&&this.onTick(this.remaining)}_tick(){if(!this.running)return;const t=performance.now(),e=(t-this._lastTime)/1e3;if(this._lastTime=t,this.remaining=Math.max(0,this.remaining-e),this.onTick&&this.onTick(this.remaining),this.remaining<=0){this.running=!1,this.onExpire&&this.onExpire();return}this._rafId=requestAnimationFrame(()=>this._tick())}}const Eu=document.getElementById("home-screen"),bu=document.getElementById("hud"),aa=document.getElementById("timer"),_x=document.getElementById("hints"),wu=document.getElementById("cut-btn"),Tu=document.getElementById("exit-btn"),Au=document.getElementById("score-panel"),Ah=document.getElementById("score-grade"),vx=document.getElementById("score-value"),xx=document.getElementById("score-detail"),yx=document.getElementById("play-again-btn"),Cu=document.getElementById("weigh-labels"),ec=document.getElementById("weigh-left"),nc=document.getElementById("weigh-right");function so(){Eu.classList.remove("hidden"),bu.classList.add("hidden")}function Sx(){Eu.classList.add("hidden"),bu.classList.remove("hidden")}function Mx(i){document.getElementById("btn-single-player").addEventListener("click",i)}function Ru(i){Tu.classList.toggle("hidden",!i)}function Ex(i){Tu.addEventListener("click",i)}function bx(i){aa.textContent=i.toFixed(2),i<5?aa.classList.add("urgent"):aa.classList.remove("urgent")}function Lc(i){wu.classList.toggle("hidden",!i)}function Dc(i){_x.style.display=i?"block":"none"}function Ch({grade:i,score:t,pctA:e,pctB:n}){const s={"PERFECT!":"#ffd700",S:"#ff6bff",A:"#00e676",B:"#64b5f6",C:"#ffee58",D:"#ffa726",F:"#ef5350"};Ah.textContent=i,Ah.style.color=s[i]||"#fff",vx.textContent=`Score: ${t}`,xx.textContent=`${e}% / ${n}%`,Au.classList.remove("hidden")}function Pu(){Au.classList.add("hidden")}function wx(i){wu.addEventListener("click",i)}function Tx(i,t){ec.textContent=`${i}%`,nc.textContent=`${t}%`,Cu.classList.remove("hidden"),requestAnimationFrame(()=>{ec.classList.add("visible"),nc.classList.add("visible")})}function Ic(){ec.classList.remove("visible"),nc.classList.remove("visible"),Cu.classList.add("hidden")}function Ax(i){yx.addEventListener("click",i)}const Lu=document.getElementById("lobby-screen"),Du=document.getElementById("waiting-screen"),Cx=document.getElementById("room-code-display"),Iu=document.getElementById("room-code-input"),Uu=document.getElementById("versus-hud"),Rx=document.getElementById("round-counter"),Nu=document.getElementById("waiting-score-banner"),Ou=document.getElementById("round-result-screen"),Fu=document.getElementById("match-result-screen"),Bu=document.getElementById("disconnect-screen"),Rh={"PERFECT!":"#ffd700",S:"#ff6bff",A:"#00e676",B:"#64b5f6",C:"#ffee58",D:"#ffa726",F:"#ef5350"};function Px(){Lu.classList.remove("hidden"),Iu.value=""}function ro(){Lu.classList.add("hidden")}function Lx(i){document.getElementById("btn-versus").addEventListener("click",i)}function Dx(i){document.getElementById("btn-create-room").addEventListener("click",i)}function Ix(i){document.getElementById("btn-join-room").addEventListener("click",i)}function Ux(i){document.getElementById("btn-lobby-back").addEventListener("click",i)}function Nx(){return Iu.value.trim().toUpperCase()}function zu(i){Du.classList.remove("hidden"),Cx.textContent=i}function Uc(){Du.classList.add("hidden")}function Ox(i){document.getElementById("btn-waiting-cancel").addEventListener("click",i)}function Fx(i,t){Uu.classList.remove("hidden"),Rx.textContent=`Round ${i} / ${t}`}function ic(){Uu.classList.add("hidden")}const Bx=document.getElementById("waiting-score-text");function zx(i){i&&(Bx.textContent=`Score: ${i.score} (${i.grade}) — ${i.pctA}% / ${i.pctB}%`),Nu.classList.remove("hidden")}function sc(){Nu.classList.add("hidden")}let ii=null;function kx(i,t,e,n){document.getElementById("round-result-title").textContent=`Round ${i} Result`;const s=document.getElementById("rr-my-grade");s.textContent=t.grade,s.style.color=Rh[t.grade]||"#fff",document.getElementById("rr-my-score").textContent=t.score,document.getElementById("rr-my-detail").textContent=`${t.pctA}% / ${t.pctB}%`;const r=document.getElementById("rr-opp-grade");r.textContent=e.grade,r.style.color=Rh[e.grade]||"#fff",document.getElementById("rr-opp-score").textContent=e.score,document.getElementById("rr-opp-detail").textContent=`${e.pctA}% / ${e.pctB}%`;const o=document.getElementById("round-winner");o.className="round-winner",t.score>e.score?(o.textContent="You win this round!",o.classList.add("you-win")):t.score<e.score?(o.textContent="Opponent wins this round!",o.classList.add("you-lose")):(o.textContent="Tied!",o.classList.add("tie"));const a=document.getElementById("round-countdown"),c=i>=n;let h=5;a.textContent=c?`Results in ${h}...`:`Next round in ${h}...`,ii&&clearInterval(ii),ii=setInterval(()=>{h--,h<=0?(clearInterval(ii),ii=null,a.textContent=c?"Loading results...":"Starting..."):a.textContent=c?`Results in ${h}...`:`Next round in ${h}...`},1e3),Ou.classList.remove("hidden")}function rc(){ii&&(clearInterval(ii),ii=null),Ou.classList.add("hidden")}const zs=document.getElementById("btn-rematch"),ks=document.getElementById("rematch-status"),Hx=document.getElementById("match-buttons");function Gx(i){const t=document.getElementById("match-outcome");t.className="match-outcome",i.outcome==="win"?(t.textContent="YOU WIN!",t.classList.add("win")):i.outcome==="lose"?(t.textContent="YOU LOSE",t.classList.add("lose")):(t.textContent="TIE!",t.classList.add("tie"));const e=document.getElementById("match-rounds-summary");e.innerHTML="";for(let n=0;n<i.myScores.length;n++){const s=i.myScores[n].score,r=i.opponentScores[n].score,o=document.createElement("div");o.className="round-summary-row",s>r?o.classList.add("round-won"):s<r&&o.classList.add("round-lost"),o.innerHTML=`
      <span class="round-label">Round ${n+1}</span>
      <span class="my-score">${s}</span>
      <span class="vs-label">vs</span>
      <span class="opp-score">${r}</span>
    `,e.appendChild(o)}document.getElementById("match-my-avg").textContent=`You: ${i.myAvg}`,document.getElementById("match-opp-avg").textContent=`Opp: ${i.oppAvg}`,Hx.classList.remove("hidden"),zs.disabled=!1,zs.textContent="Rematch",ks.classList.add("hidden"),Fu.classList.remove("hidden")}function oc(){Fu.classList.add("hidden")}function Vx(i){document.getElementById("btn-match-menu").addEventListener("click",i)}function Wx(i){zs.addEventListener("click",i)}function Xx(){zs.disabled=!0,zs.textContent="Waiting...",ks.textContent="Waiting for opponent...",ks.classList.remove("hidden")}function qx(){ks.textContent="Opponent wants a rematch!",ks.classList.remove("hidden")}function Yx(){Bu.classList.remove("hidden")}function jx(){Bu.classList.add("hidden")}function Zx(i){document.getElementById("btn-disconnect-menu").addEventListener("click",i)}function Nc(){ro(),Uc(),ic(),sc(),rc(),oc(),jx()}function $x(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ca={exports:{}};/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */var Ph;function Kx(){return Ph||(Ph=1,(function(i,t){(function(n,s){i.exports=s()})(window,function(){return(function(e){var n={};function s(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=e,s.c=n,s.d=function(r,o,a){s.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:a})},s.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},s.t=function(r,o){if(o&1&&(r=s(r)),o&8||o&4&&typeof r=="object"&&r&&r.__esModule)return r;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:r}),o&2&&typeof r!="string")for(var c in r)s.d(a,c,(function(h){return r[h]}).bind(null,c));return a},s.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return s.d(o,"a",o),o},s.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},s.p="",s(s.s=2)})([(function(e,n,s){var r=this&&this.__extends||(function(){var y=function(m,u){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,M){b.__proto__=M}||function(b,M){for(var S in M)M.hasOwnProperty(S)&&(b[S]=M[S])},y(m,u)};return function(m,u){y(m,u);function b(){this.constructor=m}m.prototype=u===null?Object.create(u):(b.prototype=u.prototype,new b)}})();Object.defineProperty(n,"__esModule",{value:!0});var o=256,a=(function(){function y(m){m===void 0&&(m="="),this._paddingCharacter=m}return y.prototype.encodedLength=function(m){return this._paddingCharacter?(m+2)/3*4|0:(m*8+5)/6|0},y.prototype.encode=function(m){for(var u="",b=0;b<m.length-2;b+=3){var M=m[b]<<16|m[b+1]<<8|m[b+2];u+=this._encodeByte(M>>>18&63),u+=this._encodeByte(M>>>12&63),u+=this._encodeByte(M>>>6&63),u+=this._encodeByte(M>>>0&63)}var S=m.length-b;if(S>0){var M=m[b]<<16|(S===2?m[b+1]<<8:0);u+=this._encodeByte(M>>>18&63),u+=this._encodeByte(M>>>12&63),S===2?u+=this._encodeByte(M>>>6&63):u+=this._paddingCharacter||"",u+=this._paddingCharacter||""}return u},y.prototype.maxDecodedLength=function(m){return this._paddingCharacter?m/4*3|0:(m*6+7)/8|0},y.prototype.decodedLength=function(m){return this.maxDecodedLength(m.length-this._getPaddingLength(m))},y.prototype.decode=function(m){if(m.length===0)return new Uint8Array(0);for(var u=this._getPaddingLength(m),b=m.length-u,M=new Uint8Array(this.maxDecodedLength(b)),S=0,U=0,P=0,R=0,N=0,T=0,E=0;U<b-4;U+=4)R=this._decodeChar(m.charCodeAt(U+0)),N=this._decodeChar(m.charCodeAt(U+1)),T=this._decodeChar(m.charCodeAt(U+2)),E=this._decodeChar(m.charCodeAt(U+3)),M[S++]=R<<2|N>>>4,M[S++]=N<<4|T>>>2,M[S++]=T<<6|E,P|=R&o,P|=N&o,P|=T&o,P|=E&o;if(U<b-1&&(R=this._decodeChar(m.charCodeAt(U)),N=this._decodeChar(m.charCodeAt(U+1)),M[S++]=R<<2|N>>>4,P|=R&o,P|=N&o),U<b-2&&(T=this._decodeChar(m.charCodeAt(U+2)),M[S++]=N<<4|T>>>2,P|=T&o),U<b-3&&(E=this._decodeChar(m.charCodeAt(U+3)),M[S++]=T<<6|E,P|=E&o),P!==0)throw new Error("Base64Coder: incorrect characters for decoding");return M},y.prototype._encodeByte=function(m){var u=m;return u+=65,u+=25-m>>>8&6,u+=51-m>>>8&-75,u+=61-m>>>8&-15,u+=62-m>>>8&3,String.fromCharCode(u)},y.prototype._decodeChar=function(m){var u=o;return u+=(42-m&m-44)>>>8&-o+m-43+62,u+=(46-m&m-48)>>>8&-o+m-47+63,u+=(47-m&m-58)>>>8&-o+m-48+52,u+=(64-m&m-91)>>>8&-o+m-65+0,u+=(96-m&m-123)>>>8&-o+m-97+26,u},y.prototype._getPaddingLength=function(m){var u=0;if(this._paddingCharacter){for(var b=m.length-1;b>=0&&m[b]===this._paddingCharacter;b--)u++;if(m.length<4||u>2)throw new Error("Base64Coder: incorrect padding")}return u},y})();n.Coder=a;var c=new a;function h(y){return c.encode(y)}n.encode=h;function d(y){return c.decode(y)}n.decode=d;var f=(function(y){r(m,y);function m(){return y!==null&&y.apply(this,arguments)||this}return m.prototype._encodeByte=function(u){var b=u;return b+=65,b+=25-u>>>8&6,b+=51-u>>>8&-75,b+=61-u>>>8&-13,b+=62-u>>>8&49,String.fromCharCode(b)},m.prototype._decodeChar=function(u){var b=o;return b+=(44-u&u-46)>>>8&-o+u-45+62,b+=(94-u&u-96)>>>8&-o+u-95+63,b+=(47-u&u-58)>>>8&-o+u-48+52,b+=(64-u&u-91)>>>8&-o+u-65+0,b+=(96-u&u-123)>>>8&-o+u-97+26,b},m})(a);n.URLSafeCoder=f;var p=new f;function _(y){return p.encode(y)}n.encodeURLSafe=_;function x(y){return p.decode(y)}n.decodeURLSafe=x,n.encodedLength=function(y){return c.encodedLength(y)},n.maxDecodedLength=function(y){return c.maxDecodedLength(y)},n.decodedLength=function(y){return c.decodedLength(y)}}),(function(e,n,s){Object.defineProperty(n,"__esModule",{value:!0});var r="utf8: invalid string",o="utf8: invalid source encoding";function a(d){for(var f=new Uint8Array(c(d)),p=0,_=0;_<d.length;_++){var x=d.charCodeAt(_);x<128?f[p++]=x:x<2048?(f[p++]=192|x>>6,f[p++]=128|x&63):x<55296?(f[p++]=224|x>>12,f[p++]=128|x>>6&63,f[p++]=128|x&63):(_++,x=(x&1023)<<10,x|=d.charCodeAt(_)&1023,x+=65536,f[p++]=240|x>>18,f[p++]=128|x>>12&63,f[p++]=128|x>>6&63,f[p++]=128|x&63)}return f}n.encode=a;function c(d){for(var f=0,p=0;p<d.length;p++){var _=d.charCodeAt(p);if(_<128)f+=1;else if(_<2048)f+=2;else if(_<55296)f+=3;else if(_<=57343){if(p>=d.length-1)throw new Error(r);p++,f+=4}else throw new Error(r)}return f}n.encodedLength=c;function h(d){for(var f=[],p=0;p<d.length;p++){var _=d[p];if(_&128){var x=void 0;if(_<224){if(p>=d.length)throw new Error(o);var y=d[++p];if((y&192)!==128)throw new Error(o);_=(_&31)<<6|y&63,x=128}else if(_<240){if(p>=d.length-1)throw new Error(o);var y=d[++p],m=d[++p];if((y&192)!==128||(m&192)!==128)throw new Error(o);_=(_&15)<<12|(y&63)<<6|m&63,x=2048}else if(_<248){if(p>=d.length-2)throw new Error(o);var y=d[++p],m=d[++p],u=d[++p];if((y&192)!==128||(m&192)!==128||(u&192)!==128)throw new Error(o);_=(_&15)<<18|(y&63)<<12|(m&63)<<6|u&63,x=65536}else throw new Error(o);if(_<x||_>=55296&&_<=57343)throw new Error(o);if(_>=65536){if(_>1114111)throw new Error(o);_-=65536,f.push(String.fromCharCode(55296|_>>10)),_=56320|_&1023}}f.push(String.fromCharCode(_))}return f.join("")}n.decode=h}),(function(e,n,s){e.exports=s(3).default}),(function(e,n,s){s.r(n);class r{constructor(l,g){this.lastId=0,this.prefix=l,this.name=g}create(l){this.lastId++;var g=this.lastId,C=this.prefix+g,D=this.name+"["+g+"]",tt=!1,dt=function(){tt||(l.apply(null,arguments),tt=!0)};return this[g]=dt,{number:g,id:C,name:D,callback:dt}}remove(l){delete this[l.number]}}var o=new r("_pusher_script_","Pusher.ScriptReceivers"),a={VERSION:"8.4.0",PROTOCOL:7,wsPort:80,wssPort:443,wsPath:"",httpHost:"sockjs.pusher.com",httpPort:80,httpsPort:443,httpPath:"/pusher",stats_host:"stats.pusher.com",authEndpoint:"/pusher/auth",authTransport:"ajax",activityTimeout:12e4,pongTimeout:3e4,unavailableTimeout:1e4,userAuthentication:{endpoint:"/pusher/user-auth",transport:"ajax"},channelAuthorization:{endpoint:"/pusher/auth",transport:"ajax"},cdn_http:"http://js.pusher.com",cdn_https:"https://js.pusher.com",dependency_suffix:""},c=a;class h{constructor(l){this.options=l,this.receivers=l.receivers||o,this.loading={}}load(l,g,C){var D=this;if(D.loading[l]&&D.loading[l].length>0)D.loading[l].push(C);else{D.loading[l]=[C];var tt=Xt.createScriptRequest(D.getPath(l,g)),dt=D.receivers.create(function(Rt){if(D.receivers.remove(dt),D.loading[l]){var Gt=D.loading[l];delete D.loading[l];for(var se=function(Ce){Ce||tt.cleanup()},ce=0;ce<Gt.length;ce++)Gt[ce](Rt,se)}});tt.send(dt)}}getRoot(l){var g,C=Xt.getDocument().location.protocol;return l&&l.useTLS||C==="https:"?g=this.options.cdn_https:g=this.options.cdn_http,g.replace(/\/*$/,"")+"/"+this.options.version}getPath(l,g){return this.getRoot(g)+"/"+l+this.options.suffix+".js"}}var d=new r("_pusher_dependencies","Pusher.DependenciesReceivers"),f=new h({cdn_http:c.cdn_http,cdn_https:c.cdn_https,version:c.VERSION,suffix:c.dependency_suffix,receivers:d});const p={baseUrl:"https://pusher.com",urls:{authenticationEndpoint:{path:"/docs/channels/server_api/authenticating_users"},authorizationEndpoint:{path:"/docs/channels/server_api/authorizing-users/"},javascriptQuickStart:{path:"/docs/javascript_quick_start"},triggeringClientEvents:{path:"/docs/client_api_guide/client_events#trigger-events"},encryptedChannelSupport:{fullUrl:"https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support"}}};var x={buildLogSuffix:function(v){const l="See:",g=p.urls[v];if(!g)return"";let C;return g.fullUrl?C=g.fullUrl:g.path&&(C=p.baseUrl+g.path),C?`${l} ${C}`:""}},y;(function(v){v.UserAuthentication="user-authentication",v.ChannelAuthorization="channel-authorization"})(y||(y={}));class m extends Error{constructor(l){super(l),Object.setPrototypeOf(this,new.target.prototype)}}class u extends Error{constructor(l){super(l),Object.setPrototypeOf(this,new.target.prototype)}}class b extends Error{constructor(l){super(l),Object.setPrototypeOf(this,new.target.prototype)}}class M extends Error{constructor(l){super(l),Object.setPrototypeOf(this,new.target.prototype)}}class S extends Error{constructor(l){super(l),Object.setPrototypeOf(this,new.target.prototype)}}class U extends Error{constructor(l){super(l),Object.setPrototypeOf(this,new.target.prototype)}}class P extends Error{constructor(l){super(l),Object.setPrototypeOf(this,new.target.prototype)}}class R extends Error{constructor(l){super(l),Object.setPrototypeOf(this,new.target.prototype)}}class N extends Error{constructor(l,g){super(g),this.status=l,Object.setPrototypeOf(this,new.target.prototype)}}var E=function(v,l,g,C,D){const tt=Xt.createXHR();tt.open("POST",g.endpoint,!0),tt.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var dt in g.headers)tt.setRequestHeader(dt,g.headers[dt]);if(g.headersProvider!=null){let Rt=g.headersProvider();for(var dt in Rt)tt.setRequestHeader(dt,Rt[dt])}return tt.onreadystatechange=function(){if(tt.readyState===4)if(tt.status===200){let Rt,Gt=!1;try{Rt=JSON.parse(tt.responseText),Gt=!0}catch{D(new N(200,`JSON returned from ${C.toString()} endpoint was invalid, yet status code was 200. Data was: ${tt.responseText}`),null)}Gt&&D(null,Rt)}else{let Rt="";switch(C){case y.UserAuthentication:Rt=x.buildLogSuffix("authenticationEndpoint");break;case y.ChannelAuthorization:Rt=`Clients must be authorized to join private or presence channels. ${x.buildLogSuffix("authorizationEndpoint")}`;break}D(new N(tt.status,`Unable to retrieve auth string from ${C.toString()} endpoint - received status: ${tt.status} from ${g.endpoint}. ${Rt}`),null)}},tt.send(l),tt};function O(v){return Q(Z(v))}var H=String.fromCharCode,G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Y=function(v){var l=v.charCodeAt(0);return l<128?v:l<2048?H(192|l>>>6)+H(128|l&63):H(224|l>>>12&15)+H(128|l>>>6&63)+H(128|l&63)},Z=function(v){return v.replace(/[^\x00-\x7F]/g,Y)},j=function(v){var l=[0,2,1][v.length%3],g=v.charCodeAt(0)<<16|(v.length>1?v.charCodeAt(1):0)<<8|(v.length>2?v.charCodeAt(2):0),C=[G.charAt(g>>>18),G.charAt(g>>>12&63),l>=2?"=":G.charAt(g>>>6&63),l>=1?"=":G.charAt(g&63)];return C.join("")},Q=window.btoa||function(v){return v.replace(/[\s\S]{1,3}/g,j)};class X{constructor(l,g,C,D){this.clear=g,this.timer=l(()=>{this.timer&&(this.timer=D(this.timer))},C)}isRunning(){return this.timer!==null}ensureAborted(){this.timer&&(this.clear(this.timer),this.timer=null)}}var rt=X;function pt(v){window.clearTimeout(v)}function lt(v){window.clearInterval(v)}class Et extends rt{constructor(l,g){super(setTimeout,pt,l,function(C){return g(),null})}}class zt extends rt{constructor(l,g){super(setInterval,lt,l,function(C){return g(),C})}}var K={now(){return Date.now?Date.now():new Date().valueOf()},defer(v){return new Et(0,v)},method(v,...l){var g=Array.prototype.slice.call(arguments,1);return function(C){return C[v].apply(C,g.concat(arguments))}}},et=K;function ot(v,...l){for(var g=0;g<l.length;g++){var C=l[g];for(var D in C)C[D]&&C[D].constructor&&C[D].constructor===Object?v[D]=ot(v[D]||{},C[D]):v[D]=C[D]}return v}function ut(){for(var v=["Pusher"],l=0;l<arguments.length;l++)typeof arguments[l]=="string"?v.push(arguments[l]):v.push(V(arguments[l]));return v.join(" : ")}function bt(v,l){var g=Array.prototype.indexOf;if(v===null)return-1;if(g&&v.indexOf===g)return v.indexOf(l);for(var C=0,D=v.length;C<D;C++)if(v[C]===l)return C;return-1}function wt(v,l){for(var g in v)Object.prototype.hasOwnProperty.call(v,g)&&l(v[g],g,v)}function Dt(v){var l=[];return wt(v,function(g,C){l.push(C)}),l}function _e(v){var l=[];return wt(v,function(g){l.push(g)}),l}function jt(v,l,g){for(var C=0;C<v.length;C++)l.call(g||window,v[C],C,v)}function xe(v,l){for(var g=[],C=0;C<v.length;C++)g.push(l(v[C],C,v,g));return g}function k(v,l){var g={};return wt(v,function(C,D){g[D]=l(C)}),g}function qe(v,l){l=l||function(D){return!!D};for(var g=[],C=0;C<v.length;C++)l(v[C],C,v,g)&&g.push(v[C]);return g}function Zt(v,l){var g={};return wt(v,function(C,D){(l&&l(C,D,v,g)||C)&&(g[D]=C)}),g}function $t(v){var l=[];return wt(v,function(g,C){l.push([C,g])}),l}function It(v,l){for(var g=0;g<v.length;g++)if(l(v[g],g,v))return!0;return!1}function pe(v,l){for(var g=0;g<v.length;g++)if(!l(v[g],g,v))return!1;return!0}function Ut(v){return k(v,function(l){return typeof l=="object"&&(l=V(l)),encodeURIComponent(O(l.toString()))})}function L(v){var l=Zt(v,function(C){return C!==void 0}),g=xe($t(Ut(l)),et.method("join","=")).join("&");return g}function w(v){var l=[],g=[];return(function C(D,tt){var dt,Rt,Gt;switch(typeof D){case"object":if(!D)return null;for(dt=0;dt<l.length;dt+=1)if(l[dt]===D)return{$ref:g[dt]};if(l.push(D),g.push(tt),Object.prototype.toString.apply(D)==="[object Array]")for(Gt=[],dt=0;dt<D.length;dt+=1)Gt[dt]=C(D[dt],tt+"["+dt+"]");else{Gt={};for(Rt in D)Object.prototype.hasOwnProperty.call(D,Rt)&&(Gt[Rt]=C(D[Rt],tt+"["+JSON.stringify(Rt)+"]"))}return Gt;case"number":case"string":case"boolean":return D}})(v,"$")}function V(v){try{return JSON.stringify(v)}catch{return JSON.stringify(w(v))}}class st{constructor(){this.globalLog=l=>{window.console&&window.console.log&&window.console.log(l)}}debug(...l){this.log(this.globalLog,l)}warn(...l){this.log(this.globalLogWarn,l)}error(...l){this.log(this.globalLogError,l)}globalLogWarn(l){window.console&&window.console.warn?window.console.warn(l):this.globalLog(l)}globalLogError(l){window.console&&window.console.error?window.console.error(l):this.globalLogWarn(l)}log(l,...g){var C=ut.apply(this,arguments);_o.log?_o.log(C):_o.logToConsole&&l.bind(this)(C)}}var J=new st,nt=function(v,l,g,C,D){(g.headers!==void 0||g.headersProvider!=null)&&J.warn(`To send headers with the ${C.toString()} request, you must use AJAX, rather than JSONP.`);var tt=v.nextAuthCallbackID.toString();v.nextAuthCallbackID++;var dt=v.getDocument(),Rt=dt.createElement("script");v.auth_callbacks[tt]=function(ce){D(null,ce)};var Gt="Pusher.auth_callbacks['"+tt+"']";Rt.src=g.endpoint+"?callback="+encodeURIComponent(Gt)+"&"+l;var se=dt.getElementsByTagName("head")[0]||dt.documentElement;se.insertBefore(Rt,se.firstChild)},Pt=nt;class _t{constructor(l){this.src=l}send(l){var g=this,C="Error loading "+g.src;g.script=document.createElement("script"),g.script.id=l.id,g.script.src=g.src,g.script.type="text/javascript",g.script.charset="UTF-8",g.script.addEventListener?(g.script.onerror=function(){l.callback(C)},g.script.onload=function(){l.callback(null)}):g.script.onreadystatechange=function(){(g.script.readyState==="loaded"||g.script.readyState==="complete")&&l.callback(null)},g.script.async===void 0&&document.attachEvent&&/opera/i.test(navigator.userAgent)?(g.errorScript=document.createElement("script"),g.errorScript.id=l.id+"_error",g.errorScript.text=l.name+"('"+C+"');",g.script.async=g.errorScript.async=!1):g.script.async=!0;var D=document.getElementsByTagName("head")[0];D.insertBefore(g.script,D.firstChild),g.errorScript&&D.insertBefore(g.errorScript,g.script.nextSibling)}cleanup(){this.script&&(this.script.onload=this.script.onerror=null,this.script.onreadystatechange=null),this.script&&this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.errorScript&&this.errorScript.parentNode&&this.errorScript.parentNode.removeChild(this.errorScript),this.script=null,this.errorScript=null}}class yt{constructor(l,g){this.url=l,this.data=g}send(l){if(!this.request){var g=L(this.data),C=this.url+"/"+l.number+"?"+g;this.request=Xt.createScriptRequest(C),this.request.send(l)}}cleanup(){this.request&&this.request.cleanup()}}var Qt=function(v,l){return function(g,C){var D="http"+(l?"s":"")+"://",tt=D+(v.host||v.options.host)+v.options.path,dt=Xt.createJSONPRequest(tt,g),Rt=Xt.ScriptReceivers.create(function(Gt,se){o.remove(Rt),dt.cleanup(),se&&se.host&&(v.host=se.host),C&&C(Gt,se)});dt.send(Rt)}},ct={name:"jsonp",getAgent:Qt},St=ct;function Nt(v,l,g){var C=v+(l.useTLS?"s":""),D=l.useTLS?l.hostTLS:l.hostNonTLS;return C+"://"+D+g}function Ot(v,l){var g="/app/"+v,C="?protocol="+c.PROTOCOL+"&client=js&version="+c.VERSION+(l?"&"+l:"");return g+C}var Mt={getInitial:function(v,l){var g=(l.httpPath||"")+Ot(v,"flash=false");return Nt("ws",l,g)}},Kt={getInitial:function(v,l){var g=(l.httpPath||"/pusher")+Ot(v);return Nt("http",l,g)}},Vt={getInitial:function(v,l){return Nt("http",l,l.httpPath||"/pusher")},getPath:function(v,l){return Ot(v)}};class le{constructor(){this._callbacks={}}get(l){return this._callbacks[F(l)]}add(l,g,C){var D=F(l);this._callbacks[D]=this._callbacks[D]||[],this._callbacks[D].push({fn:g,context:C})}remove(l,g,C){if(!l&&!g&&!C){this._callbacks={};return}var D=l?[F(l)]:Dt(this._callbacks);g||C?this.removeCallback(D,g,C):this.removeAllCallbacks(D)}removeCallback(l,g,C){jt(l,function(D){this._callbacks[D]=qe(this._callbacks[D]||[],function(tt){return g&&g!==tt.fn||C&&C!==tt.context}),this._callbacks[D].length===0&&delete this._callbacks[D]},this)}removeAllCallbacks(l){jt(l,function(g){delete this._callbacks[g]},this)}}function F(v){return"_"+v}class ft{constructor(l){this.callbacks=new le,this.global_callbacks=[],this.failThrough=l}bind(l,g,C){return this.callbacks.add(l,g,C),this}bind_global(l){return this.global_callbacks.push(l),this}unbind(l,g,C){return this.callbacks.remove(l,g,C),this}unbind_global(l){return l?(this.global_callbacks=qe(this.global_callbacks||[],g=>g!==l),this):(this.global_callbacks=[],this)}unbind_all(){return this.unbind(),this.unbind_global(),this}emit(l,g,C){for(var D=0;D<this.global_callbacks.length;D++)this.global_callbacks[D](l,g);var tt=this.callbacks.get(l),dt=[];if(C?dt.push(g,C):g&&dt.push(g),tt&&tt.length>0)for(var D=0;D<tt.length;D++)tt[D].fn.apply(tt[D].context||window,dt);else this.failThrough&&this.failThrough(l,g);return this}}class $ extends ft{constructor(l,g,C,D,tt){super(),this.initialize=Xt.transportConnectionInitializer,this.hooks=l,this.name=g,this.priority=C,this.key=D,this.options=tt,this.state="new",this.timeline=tt.timeline,this.activityTimeout=tt.activityTimeout,this.id=this.timeline.generateUniqueID()}handlesActivityChecks(){return!!this.hooks.handlesActivityChecks}supportsPing(){return!!this.hooks.supportsPing}connect(){if(this.socket||this.state!=="initialized")return!1;var l=this.hooks.urls.getInitial(this.key,this.options);try{this.socket=this.hooks.getSocket(l,this.options)}catch(g){return et.defer(()=>{this.onError(g),this.changeState("closed")}),!1}return this.bindListeners(),J.debug("Connecting",{transport:this.name,url:l}),this.changeState("connecting"),!0}close(){return this.socket?(this.socket.close(),!0):!1}send(l){return this.state==="open"?(et.defer(()=>{this.socket&&this.socket.send(l)}),!0):!1}ping(){this.state==="open"&&this.supportsPing()&&this.socket.ping()}onOpen(){this.hooks.beforeOpen&&this.hooks.beforeOpen(this.socket,this.hooks.urls.getPath(this.key,this.options)),this.changeState("open"),this.socket.onopen=void 0}onError(l){this.emit("error",{type:"WebSocketError",error:l}),this.timeline.error(this.buildTimelineMessage({error:l.toString()}))}onClose(l){l?this.changeState("closed",{code:l.code,reason:l.reason,wasClean:l.wasClean}):this.changeState("closed"),this.unbindListeners(),this.socket=void 0}onMessage(l){this.emit("message",l)}onActivity(){this.emit("activity")}bindListeners(){this.socket.onopen=()=>{this.onOpen()},this.socket.onerror=l=>{this.onError(l)},this.socket.onclose=l=>{this.onClose(l)},this.socket.onmessage=l=>{this.onMessage(l)},this.supportsPing()&&(this.socket.onactivity=()=>{this.onActivity()})}unbindListeners(){this.socket&&(this.socket.onopen=void 0,this.socket.onerror=void 0,this.socket.onclose=void 0,this.socket.onmessage=void 0,this.supportsPing()&&(this.socket.onactivity=void 0))}changeState(l,g){this.state=l,this.timeline.info(this.buildTimelineMessage({state:l,params:g})),this.emit(l,g)}buildTimelineMessage(l){return ot({cid:this.id},l)}}class it{constructor(l){this.hooks=l}isSupported(l){return this.hooks.isSupported(l)}createConnection(l,g,C,D){return new $(this.hooks,l,g,C,D)}}var xt=new it({urls:Mt,handlesActivityChecks:!1,supportsPing:!1,isInitialized:function(){return!!Xt.getWebSocketAPI()},isSupported:function(){return!!Xt.getWebSocketAPI()},getSocket:function(v){return Xt.createWebSocket(v)}}),vt={urls:Kt,handlesActivityChecks:!1,supportsPing:!0,isInitialized:function(){return!0}},kt=ot({getSocket:function(v){return Xt.HTTPFactory.createStreamingSocket(v)}},vt),ve=ot({getSocket:function(v){return Xt.HTTPFactory.createPollingSocket(v)}},vt),De={isSupported:function(){return Xt.isXHRSupported()}},re=new it(ot({},kt,De)),sn=new it(ot({},ve,De)),dn={ws:xt,xhr_streaming:re,xhr_polling:sn},di=dn,$s=new it({file:"sockjs",urls:Vt,handlesActivityChecks:!0,supportsPing:!1,isSupported:function(){return!0},isInitialized:function(){return window.SockJS!==void 0},getSocket:function(v,l){return new window.SockJS(v,null,{js_path:f.getPath("sockjs",{useTLS:l.useTLS}),ignore_null_origin:l.ignoreNullOrigin})},beforeOpen:function(v,l){v.send(JSON.stringify({path:l}))}}),En={isSupported:function(v){var l=Xt.isXDRSupported(v.useTLS);return l}},gs=new it(ot({},kt,En)),Ks=new it(ot({},ve,En));di.xdr_streaming=gs,di.xdr_polling=Ks,di.sockjs=$s;var Js=di;class Oi extends ft{constructor(){super();var l=this;window.addEventListener!==void 0&&(window.addEventListener("online",function(){l.emit("online")},!1),window.addEventListener("offline",function(){l.emit("offline")},!1))}isOnline(){return window.navigator.onLine===void 0?!0:window.navigator.onLine}}var Qs=new Oi;class Fi{constructor(l,g,C){this.manager=l,this.transport=g,this.minPingDelay=C.minPingDelay,this.maxPingDelay=C.maxPingDelay,this.pingDelay=void 0}createConnection(l,g,C,D){D=ot({},D,{activityTimeout:this.pingDelay});var tt=this.transport.createConnection(l,g,C,D),dt=null,Rt=function(){tt.unbind("open",Rt),tt.bind("closed",Gt),dt=et.now()},Gt=se=>{if(tt.unbind("closed",Gt),se.code===1002||se.code===1003)this.manager.reportDeath();else if(!se.wasClean&&dt){var ce=et.now()-dt;ce<2*this.maxPingDelay&&(this.manager.reportDeath(),this.pingDelay=Math.max(ce/2,this.minPingDelay))}};return tt.bind("open",Rt),tt}isSupported(l){return this.manager.isAlive()&&this.transport.isSupported(l)}}const _s={decodeMessage:function(v){try{var l=JSON.parse(v.data),g=l.data;if(typeof g=="string")try{g=JSON.parse(l.data)}catch{}var C={event:l.event,channel:l.channel,data:g};return l.user_id&&(C.user_id=l.user_id),C}catch(D){throw{type:"MessageParseError",error:D,data:v.data}}},encodeMessage:function(v){return JSON.stringify(v)},processHandshake:function(v){var l=_s.decodeMessage(v);if(l.event==="pusher:connection_established"){if(!l.data.activity_timeout)throw"No activity timeout specified in handshake";return{action:"connected",id:l.data.socket_id,activityTimeout:l.data.activity_timeout*1e3}}else{if(l.event==="pusher:error")return{action:this.getCloseAction(l.data),error:this.getCloseError(l.data)};throw"Invalid handshake"}},getCloseAction:function(v){return v.code<4e3?v.code>=1002&&v.code<=1004?"backoff":null:v.code===4e3?"tls_only":v.code<4100?"refused":v.code<4200?"backoff":v.code<4300?"retry":"refused"},getCloseError:function(v){return v.code!==1e3&&v.code!==1001?{type:"PusherError",data:{code:v.code,message:v.reason||v.message}}:null}};var bn=_s;class uo extends ft{constructor(l,g){super(),this.id=l,this.transport=g,this.activityTimeout=g.activityTimeout,this.bindListeners()}handlesActivityChecks(){return this.transport.handlesActivityChecks()}send(l){return this.transport.send(l)}send_event(l,g,C){var D={event:l,data:g};return C&&(D.channel=C),J.debug("Event sent",D),this.send(bn.encodeMessage(D))}ping(){this.transport.supportsPing()?this.transport.ping():this.send_event("pusher:ping",{})}close(){this.transport.close()}bindListeners(){var l={message:C=>{var D;try{D=bn.decodeMessage(C)}catch(tt){this.emit("error",{type:"MessageParseError",error:tt,data:C.data})}if(D!==void 0){switch(J.debug("Event recd",D),D.event){case"pusher:error":this.emit("error",{type:"PusherError",data:D.data});break;case"pusher:ping":this.emit("ping");break;case"pusher:pong":this.emit("pong");break}this.emit("message",D)}},activity:()=>{this.emit("activity")},error:C=>{this.emit("error",C)},closed:C=>{g(),C&&C.code&&this.handleCloseEvent(C),this.transport=null,this.emit("closed")}},g=()=>{wt(l,(C,D)=>{this.transport.unbind(D,C)})};wt(l,(C,D)=>{this.transport.bind(D,C)})}handleCloseEvent(l){var g=bn.getCloseAction(l),C=bn.getCloseError(l);C&&this.emit("error",C),g&&this.emit(g,{action:g,error:C})}}class fo{constructor(l,g){this.transport=l,this.callback=g,this.bindListeners()}close(){this.unbindListeners(),this.transport.close()}bindListeners(){this.onMessage=l=>{this.unbindListeners();var g;try{g=bn.processHandshake(l)}catch(C){this.finish("error",{error:C}),this.transport.close();return}g.action==="connected"?this.finish("connected",{connection:new uo(g.id,this.transport),activityTimeout:g.activityTimeout}):(this.finish(g.action,{error:g.error}),this.transport.close())},this.onClosed=l=>{this.unbindListeners();var g=bn.getCloseAction(l)||"backoff",C=bn.getCloseError(l);this.finish(g,{error:C})},this.transport.bind("message",this.onMessage),this.transport.bind("closed",this.onClosed)}unbindListeners(){this.transport.unbind("message",this.onMessage),this.transport.unbind("closed",this.onClosed)}finish(l,g){this.callback(ot({transport:this.transport,action:l},g))}}class po{constructor(l,g){this.timeline=l,this.options=g||{}}send(l,g){this.timeline.isEmpty()||this.timeline.send(Xt.TimelineTransport.getAgent(this,l),g)}}class A extends ft{constructor(l,g){super(function(C,D){J.debug("No callbacks on "+l+" for "+C)}),this.name=l,this.pusher=g,this.subscribed=!1,this.subscriptionPending=!1,this.subscriptionCancelled=!1}authorize(l,g){return g(null,{auth:""})}trigger(l,g){if(l.indexOf("client-")!==0)throw new m("Event '"+l+"' does not start with 'client-'");if(!this.subscribed){var C=x.buildLogSuffix("triggeringClientEvents");J.warn(`Client event triggered before channel 'subscription_succeeded' event . ${C}`)}return this.pusher.send_event(l,g,this.name)}disconnect(){this.subscribed=!1,this.subscriptionPending=!1}handleEvent(l){var g=l.event,C=l.data;if(g==="pusher_internal:subscription_succeeded")this.handleSubscriptionSucceededEvent(l);else if(g==="pusher_internal:subscription_count")this.handleSubscriptionCountEvent(l);else if(g.indexOf("pusher_internal:")!==0){var D={};this.emit(g,C,D)}}handleSubscriptionSucceededEvent(l){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):this.emit("pusher:subscription_succeeded",l.data)}handleSubscriptionCountEvent(l){l.data.subscription_count&&(this.subscriptionCount=l.data.subscription_count),this.emit("pusher:subscription_count",l.data)}subscribe(){this.subscribed||(this.subscriptionPending=!0,this.subscriptionCancelled=!1,this.authorize(this.pusher.connection.socket_id,(l,g)=>{l?(this.subscriptionPending=!1,J.error(l.toString()),this.emit("pusher:subscription_error",Object.assign({},{type:"AuthError",error:l.message},l instanceof N?{status:l.status}:{}))):this.pusher.send_event("pusher:subscribe",{auth:g.auth,channel_data:g.channel_data,channel:this.name})}))}unsubscribe(){this.subscribed=!1,this.pusher.send_event("pusher:unsubscribe",{channel:this.name})}cancelSubscription(){this.subscriptionCancelled=!0}reinstateSubscription(){this.subscriptionCancelled=!1}}class B extends A{authorize(l,g){return this.pusher.config.channelAuthorizer({channelName:this.name,socketId:l},g)}}class W{constructor(){this.reset()}get(l){return Object.prototype.hasOwnProperty.call(this.members,l)?{id:l,info:this.members[l]}:null}each(l){wt(this.members,(g,C)=>{l(this.get(C))})}setMyID(l){this.myID=l}onSubscription(l){this.members=l.presence.hash,this.count=l.presence.count,this.me=this.get(this.myID)}addMember(l){return this.get(l.user_id)===null&&this.count++,this.members[l.user_id]=l.user_info,this.get(l.user_id)}removeMember(l){var g=this.get(l.user_id);return g&&(delete this.members[l.user_id],this.count--),g}reset(){this.members={},this.count=0,this.myID=null,this.me=null}}var q=function(v,l,g,C){function D(tt){return tt instanceof g?tt:new g(function(dt){dt(tt)})}return new(g||(g=Promise))(function(tt,dt){function Rt(ce){try{se(C.next(ce))}catch(Ce){dt(Ce)}}function Gt(ce){try{se(C.throw(ce))}catch(Ce){dt(Ce)}}function se(ce){ce.done?tt(ce.value):D(ce.value).then(Rt,Gt)}se((C=C.apply(v,l||[])).next())})};class z extends B{constructor(l,g){super(l,g),this.members=new W}authorize(l,g){super.authorize(l,(C,D)=>q(this,void 0,void 0,function*(){if(!C)if(D=D,D.channel_data!=null){var tt=JSON.parse(D.channel_data);this.members.setMyID(tt.user_id)}else if(yield this.pusher.user.signinDonePromise,this.pusher.user.user_data!=null)this.members.setMyID(this.pusher.user.user_data.id);else{let dt=x.buildLogSuffix("authorizationEndpoint");J.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${dt}, or the user should be signed in.`),g("Invalid auth response");return}g(C,D)}))}handleEvent(l){var g=l.event;if(g.indexOf("pusher_internal:")===0)this.handleInternalEvent(l);else{var C=l.data,D={};l.user_id&&(D.user_id=l.user_id),this.emit(g,C,D)}}handleInternalEvent(l){var g=l.event,C=l.data;switch(g){case"pusher_internal:subscription_succeeded":this.handleSubscriptionSucceededEvent(l);break;case"pusher_internal:subscription_count":this.handleSubscriptionCountEvent(l);break;case"pusher_internal:member_added":var D=this.members.addMember(C);this.emit("pusher:member_added",D);break;case"pusher_internal:member_removed":var tt=this.members.removeMember(C);tt&&this.emit("pusher:member_removed",tt);break}}handleSubscriptionSucceededEvent(l){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):(this.members.onSubscription(l.data),this.emit("pusher:subscription_succeeded",this.members))}disconnect(){this.members.reset(),super.disconnect()}}var ht=s(1),gt=s(0);class Tt extends B{constructor(l,g,C){super(l,g),this.key=null,this.nacl=C}authorize(l,g){super.authorize(l,(C,D)=>{if(C){g(C,D);return}let tt=D.shared_secret;if(!tt){g(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`),null);return}this.key=Object(gt.decode)(tt),delete D.shared_secret,g(null,D)})}trigger(l,g){throw new U("Client events are not currently supported for encrypted channels")}handleEvent(l){var g=l.event,C=l.data;if(g.indexOf("pusher_internal:")===0||g.indexOf("pusher:")===0){super.handleEvent(l);return}this.handleEncryptedEvent(g,C)}handleEncryptedEvent(l,g){if(!this.key){J.debug("Received encrypted event before key has been retrieved from the authEndpoint");return}if(!g.ciphertext||!g.nonce){J.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: "+g);return}let C=Object(gt.decode)(g.ciphertext);if(C.length<this.nacl.secretbox.overheadLength){J.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${C.length}`);return}let D=Object(gt.decode)(g.nonce);if(D.length<this.nacl.secretbox.nonceLength){J.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${D.length}`);return}let tt=this.nacl.secretbox.open(C,D,this.key);if(tt===null){J.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."),this.authorize(this.pusher.connection.socket_id,(dt,Rt)=>{if(dt){J.error(`Failed to make a request to the authEndpoint: ${Rt}. Unable to fetch new key, so dropping encrypted event`);return}if(tt=this.nacl.secretbox.open(C,D,this.key),tt===null){J.error("Failed to decrypt event with new key. Dropping encrypted event");return}this.emit(l,this.getDataToEmit(tt))});return}this.emit(l,this.getDataToEmit(tt))}getDataToEmit(l){let g=Object(ht.decode)(l);try{return JSON.parse(g)}catch{return g}}}class At extends ft{constructor(l,g){super(),this.state="initialized",this.connection=null,this.key=l,this.options=g,this.timeline=this.options.timeline,this.usingTLS=this.options.useTLS,this.errorCallbacks=this.buildErrorCallbacks(),this.connectionCallbacks=this.buildConnectionCallbacks(this.errorCallbacks),this.handshakeCallbacks=this.buildHandshakeCallbacks(this.errorCallbacks);var C=Xt.getNetwork();C.bind("online",()=>{this.timeline.info({netinfo:"online"}),(this.state==="connecting"||this.state==="unavailable")&&this.retryIn(0)}),C.bind("offline",()=>{this.timeline.info({netinfo:"offline"}),this.connection&&this.sendActivityCheck()}),this.updateStrategy()}connect(){if(!(this.connection||this.runner)){if(!this.strategy.isSupported()){this.updateState("failed");return}this.updateState("connecting"),this.startConnecting(),this.setUnavailableTimer()}}send(l){return this.connection?this.connection.send(l):!1}send_event(l,g,C){return this.connection?this.connection.send_event(l,g,C):!1}disconnect(){this.disconnectInternally(),this.updateState("disconnected")}isUsingTLS(){return this.usingTLS}startConnecting(){var l=(g,C)=>{g?this.runner=this.strategy.connect(0,l):C.action==="error"?(this.emit("error",{type:"HandshakeError",error:C.error}),this.timeline.error({handshakeError:C.error})):(this.abortConnecting(),this.handshakeCallbacks[C.action](C))};this.runner=this.strategy.connect(0,l)}abortConnecting(){this.runner&&(this.runner.abort(),this.runner=null)}disconnectInternally(){if(this.abortConnecting(),this.clearRetryTimer(),this.clearUnavailableTimer(),this.connection){var l=this.abandonConnection();l.close()}}updateStrategy(){this.strategy=this.options.getStrategy({key:this.key,timeline:this.timeline,useTLS:this.usingTLS})}retryIn(l){this.timeline.info({action:"retry",delay:l}),l>0&&this.emit("connecting_in",Math.round(l/1e3)),this.retryTimer=new Et(l||0,()=>{this.disconnectInternally(),this.connect()})}clearRetryTimer(){this.retryTimer&&(this.retryTimer.ensureAborted(),this.retryTimer=null)}setUnavailableTimer(){this.unavailableTimer=new Et(this.options.unavailableTimeout,()=>{this.updateState("unavailable")})}clearUnavailableTimer(){this.unavailableTimer&&this.unavailableTimer.ensureAborted()}sendActivityCheck(){this.stopActivityCheck(),this.connection.ping(),this.activityTimer=new Et(this.options.pongTimeout,()=>{this.timeline.error({pong_timed_out:this.options.pongTimeout}),this.retryIn(0)})}resetActivityCheck(){this.stopActivityCheck(),this.connection&&!this.connection.handlesActivityChecks()&&(this.activityTimer=new Et(this.activityTimeout,()=>{this.sendActivityCheck()}))}stopActivityCheck(){this.activityTimer&&this.activityTimer.ensureAborted()}buildConnectionCallbacks(l){return ot({},l,{message:g=>{this.resetActivityCheck(),this.emit("message",g)},ping:()=>{this.send_event("pusher:pong",{})},activity:()=>{this.resetActivityCheck()},error:g=>{this.emit("error",g)},closed:()=>{this.abandonConnection(),this.shouldRetry()&&this.retryIn(1e3)}})}buildHandshakeCallbacks(l){return ot({},l,{connected:g=>{this.activityTimeout=Math.min(this.options.activityTimeout,g.activityTimeout,g.connection.activityTimeout||1/0),this.clearUnavailableTimer(),this.setConnection(g.connection),this.socket_id=this.connection.id,this.updateState("connected",{socket_id:this.socket_id})}})}buildErrorCallbacks(){let l=g=>C=>{C.error&&this.emit("error",{type:"WebSocketError",error:C.error}),g(C)};return{tls_only:l(()=>{this.usingTLS=!0,this.updateStrategy(),this.retryIn(0)}),refused:l(()=>{this.disconnect()}),backoff:l(()=>{this.retryIn(1e3)}),retry:l(()=>{this.retryIn(0)})}}setConnection(l){this.connection=l;for(var g in this.connectionCallbacks)this.connection.bind(g,this.connectionCallbacks[g]);this.resetActivityCheck()}abandonConnection(){if(this.connection){this.stopActivityCheck();for(var l in this.connectionCallbacks)this.connection.unbind(l,this.connectionCallbacks[l]);var g=this.connection;return this.connection=null,g}}updateState(l,g){var C=this.state;if(this.state=l,C!==l){var D=l;D==="connected"&&(D+=" with new socket ID "+g.socket_id),J.debug("State changed",C+" -> "+D),this.timeline.info({state:l,params:g}),this.emit("state_change",{previous:C,current:l}),this.emit(l,g)}}shouldRetry(){return this.state==="connecting"||this.state==="connected"}}class Ft{constructor(){this.channels={}}add(l,g){return this.channels[l]||(this.channels[l]=Ht(l,g)),this.channels[l]}all(){return _e(this.channels)}find(l){return this.channels[l]}remove(l){var g=this.channels[l];return delete this.channels[l],g}disconnect(){wt(this.channels,function(l){l.disconnect()})}}function Ht(v,l){if(v.indexOf("private-encrypted-")===0){if(l.config.nacl)return Wt.createEncryptedChannel(v,l,l.config.nacl);let g="Tried to subscribe to a private-encrypted- channel but no nacl implementation available",C=x.buildLogSuffix("encryptedChannelSupport");throw new U(`${g}. ${C}`)}else{if(v.indexOf("private-")===0)return Wt.createPrivateChannel(v,l);if(v.indexOf("presence-")===0)return Wt.createPresenceChannel(v,l);if(v.indexOf("#")===0)throw new u('Cannot create a channel with name "'+v+'".');return Wt.createChannel(v,l)}}var Ct={createChannels(){return new Ft},createConnectionManager(v,l){return new At(v,l)},createChannel(v,l){return new A(v,l)},createPrivateChannel(v,l){return new B(v,l)},createPresenceChannel(v,l){return new z(v,l)},createEncryptedChannel(v,l,g){return new Tt(v,l,g)},createTimelineSender(v,l){return new po(v,l)},createHandshake(v,l){return new fo(v,l)},createAssistantToTheTransportManager(v,l,g){return new Fi(v,l,g)}},Wt=Ct;class ae{constructor(l){this.options=l||{},this.livesLeft=this.options.lives||1/0}getAssistant(l){return Wt.createAssistantToTheTransportManager(this,l,{minPingDelay:this.options.minPingDelay,maxPingDelay:this.options.maxPingDelay})}isAlive(){return this.livesLeft>0}reportDeath(){this.livesLeft-=1}}class te{constructor(l,g){this.strategies=l,this.loop=!!g.loop,this.failFast=!!g.failFast,this.timeout=g.timeout,this.timeoutLimit=g.timeoutLimit}isSupported(){return It(this.strategies,et.method("isSupported"))}connect(l,g){var C=this.strategies,D=0,tt=this.timeout,dt=null,Rt=(Gt,se)=>{se?g(null,se):(D=D+1,this.loop&&(D=D%C.length),D<C.length?(tt&&(tt=tt*2,this.timeoutLimit&&(tt=Math.min(tt,this.timeoutLimit))),dt=this.tryStrategy(C[D],l,{timeout:tt,failFast:this.failFast},Rt)):g(!0))};return dt=this.tryStrategy(C[D],l,{timeout:tt,failFast:this.failFast},Rt),{abort:function(){dt.abort()},forceMinPriority:function(Gt){l=Gt,dt&&dt.forceMinPriority(Gt)}}}tryStrategy(l,g,C,D){var tt=null,dt=null;return C.timeout>0&&(tt=new Et(C.timeout,function(){dt.abort(),D(!0)})),dt=l.connect(g,function(Rt,Gt){Rt&&tt&&tt.isRunning()&&!C.failFast||(tt&&tt.ensureAborted(),D(Rt,Gt))}),{abort:function(){tt&&tt.ensureAborted(),dt.abort()},forceMinPriority:function(Rt){dt.forceMinPriority(Rt)}}}}class Oe{constructor(l){this.strategies=l}isSupported(){return It(this.strategies,et.method("isSupported"))}connect(l,g){return ne(this.strategies,l,function(C,D){return function(tt,dt){if(D[C].error=tt,tt){Lt(D)&&g(!0);return}jt(D,function(Rt){Rt.forceMinPriority(dt.transport.priority)}),g(null,dt)}})}}function ne(v,l,g){var C=xe(v,function(D,tt,dt,Rt){return D.connect(l,g(tt,Rt))});return{abort:function(){jt(C,fn)},forceMinPriority:function(D){jt(C,function(tt){tt.forceMinPriority(D)})}}}function Lt(v){return pe(v,function(l){return!!l.error})}function fn(v){!v.error&&!v.aborted&&(v.abort(),v.aborted=!0)}class ie{constructor(l,g,C){this.strategy=l,this.transports=g,this.ttl=C.ttl||1800*1e3,this.usingTLS=C.useTLS,this.timeline=C.timeline}isSupported(){return this.strategy.isSupported()}connect(l,g){var C=this.usingTLS,D=qn(C),tt=D&&D.cacheSkipCount?D.cacheSkipCount:0,dt=[this.strategy];if(D&&D.timestamp+this.ttl>=et.now()){var Rt=this.transports[D.transport];Rt&&(["ws","wss"].includes(D.transport)||tt>3?(this.timeline.info({cached:!0,transport:D.transport,latency:D.latency}),dt.push(new te([Rt],{timeout:D.latency*2+1e3,failFast:!0}))):tt++)}var Gt=et.now(),se=dt.pop().connect(l,function ce(Ce,nr){Ce?(Yn(C),dt.length>0?(Gt=et.now(),se=dt.pop().connect(l,ce)):g(Ce)):(je(C,nr.transport.name,et.now()-Gt,tt),g(null,nr))});return{abort:function(){se.abort()},forceMinPriority:function(ce){l=ce,se&&se.forceMinPriority(ce)}}}}function Ye(v){return"pusherTransport"+(v?"TLS":"NonTLS")}function qn(v){var l=Xt.getLocalStorage();if(l)try{var g=l[Ye(v)];if(g)return JSON.parse(g)}catch{Yn(v)}return null}function je(v,l,g,C){var D=Xt.getLocalStorage();if(D)try{D[Ye(v)]=V({timestamp:et.now(),transport:l,latency:g,cacheSkipCount:C})}catch{}}function Yn(v){var l=Xt.getLocalStorage();if(l)try{delete l[Ye(v)]}catch{}}class oe{constructor(l,{delay:g}){this.strategy=l,this.options={delay:g}}isSupported(){return this.strategy.isSupported()}connect(l,g){var C=this.strategy,D,tt=new Et(this.options.delay,function(){D=C.connect(l,g)});return{abort:function(){tt.ensureAborted(),D&&D.abort()},forceMinPriority:function(dt){l=dt,D&&D.forceMinPriority(dt)}}}}class Ge{constructor(l,g,C){this.test=l,this.trueBranch=g,this.falseBranch=C}isSupported(){var l=this.test()?this.trueBranch:this.falseBranch;return l.isSupported()}connect(l,g){var C=this.test()?this.trueBranch:this.falseBranch;return C.connect(l,g)}}class fi{constructor(l){this.strategy=l}isSupported(){return this.strategy.isSupported()}connect(l,g){var C=this.strategy.connect(l,function(D,tt){tt&&C.abort(),g(D,tt)});return C}}function Fe(v){return function(){return v.isSupported()}}var wn=function(v,l,g){var C={};function D(Jc,qd,Yd,jd,Zd){var Qc=g(v,Jc,qd,Yd,jd,Zd);return C[Jc]=Qc,Qc}var tt=Object.assign({},l,{hostNonTLS:v.wsHost+":"+v.wsPort,hostTLS:v.wsHost+":"+v.wssPort,httpPath:v.wsPath}),dt=Object.assign({},tt,{useTLS:!0}),Rt=Object.assign({},l,{hostNonTLS:v.httpHost+":"+v.httpPort,hostTLS:v.httpHost+":"+v.httpsPort,httpPath:v.httpPath}),Gt={loop:!0,timeout:15e3,timeoutLimit:6e4},se=new ae({minPingDelay:1e4,maxPingDelay:v.activityTimeout}),ce=new ae({lives:2,minPingDelay:1e4,maxPingDelay:v.activityTimeout}),Ce=D("ws","ws",3,tt,se),nr=D("wss","ws",3,dt,se),Hd=D("sockjs","sockjs",1,Rt),qc=D("xhr_streaming","xhr_streaming",1,Rt,ce),Gd=D("xdr_streaming","xdr_streaming",1,Rt,ce),Yc=D("xhr_polling","xhr_polling",1,Rt),Vd=D("xdr_polling","xdr_polling",1,Rt),jc=new te([Ce],Gt),Wd=new te([nr],Gt),Xd=new te([Hd],Gt),Zc=new te([new Ge(Fe(qc),qc,Gd)],Gt),$c=new te([new Ge(Fe(Yc),Yc,Vd)],Gt),Kc=new te([new Ge(Fe(Zc),new Oe([Zc,new oe($c,{delay:4e3})]),$c)],Gt),vo=new Ge(Fe(Kc),Kc,Xd),xo;return l.useTLS?xo=new Oe([jc,new oe(vo,{delay:2e3})]):xo=new Oe([jc,new oe(Wd,{delay:2e3}),new oe(vo,{delay:5e3})]),new ie(new fi(new Ge(Fe(Ce),xo,vo)),C,{ttl:18e5,timeline:l.timeline,useTLS:l.useTLS})},Tn=wn,tr=(function(){var v=this;v.timeline.info(v.buildTimelineMessage({transport:v.name+(v.options.useTLS?"s":"")})),v.hooks.isInitialized()?v.changeState("initialized"):v.hooks.file?(v.changeState("initializing"),f.load(v.hooks.file,{useTLS:v.options.useTLS},function(l,g){v.hooks.isInitialized()?(v.changeState("initialized"),g(!0)):(l&&v.onError(l),v.onClose(),g(!1))})):v.onClose()}),$u={getRequest:function(v){var l=new window.XDomainRequest;return l.ontimeout=function(){v.emit("error",new b),v.close()},l.onerror=function(g){v.emit("error",g),v.close()},l.onprogress=function(){l.responseText&&l.responseText.length>0&&v.onChunk(200,l.responseText)},l.onload=function(){l.responseText&&l.responseText.length>0&&v.onChunk(200,l.responseText),v.emit("finished",200),v.close()},l},abortRequest:function(v){v.ontimeout=v.onerror=v.onprogress=v.onload=null,v.abort()}},Ku=$u;const Ju=256*1024;class Qu extends ft{constructor(l,g,C){super(),this.hooks=l,this.method=g,this.url=C}start(l){this.position=0,this.xhr=this.hooks.getRequest(this),this.unloader=()=>{this.close()},Xt.addUnloadListener(this.unloader),this.xhr.open(this.method,this.url,!0),this.xhr.setRequestHeader&&this.xhr.setRequestHeader("Content-Type","application/json"),this.xhr.send(l)}close(){this.unloader&&(Xt.removeUnloadListener(this.unloader),this.unloader=null),this.xhr&&(this.hooks.abortRequest(this.xhr),this.xhr=null)}onChunk(l,g){for(;;){var C=this.advanceBuffer(g);if(C)this.emit("chunk",{status:l,data:C});else break}this.isBufferTooLong(g)&&this.emit("buffer_too_long")}advanceBuffer(l){var g=l.slice(this.position),C=g.indexOf(`
`);return C!==-1?(this.position+=C+1,g.slice(0,C)):null}isBufferTooLong(l){return this.position===l.length&&l.length>Ju}}var mo;(function(v){v[v.CONNECTING=0]="CONNECTING",v[v.OPEN=1]="OPEN",v[v.CLOSED=3]="CLOSED"})(mo||(mo={}));var pi=mo,td=1;class ed{constructor(l,g){this.hooks=l,this.session=Vc(1e3)+"/"+rd(8),this.location=nd(g),this.readyState=pi.CONNECTING,this.openStream()}send(l){return this.sendRaw(JSON.stringify([l]))}ping(){this.hooks.sendHeartbeat(this)}close(l,g){this.onClose(l,g,!0)}sendRaw(l){if(this.readyState===pi.OPEN)try{return Xt.createSocketRequest("POST",Gc(id(this.location,this.session))).start(l),!0}catch{return!1}else return!1}reconnect(){this.closeStream(),this.openStream()}onClose(l,g,C){this.closeStream(),this.readyState=pi.CLOSED,this.onclose&&this.onclose({code:l,reason:g,wasClean:C})}onChunk(l){if(l.status===200){this.readyState===pi.OPEN&&this.onActivity();var g,C=l.data.slice(0,1);switch(C){case"o":g=JSON.parse(l.data.slice(1)||"{}"),this.onOpen(g);break;case"a":g=JSON.parse(l.data.slice(1)||"[]");for(var D=0;D<g.length;D++)this.onEvent(g[D]);break;case"m":g=JSON.parse(l.data.slice(1)||"null"),this.onEvent(g);break;case"h":this.hooks.onHeartbeat(this);break;case"c":g=JSON.parse(l.data.slice(1)||"[]"),this.onClose(g[0],g[1],!0);break}}}onOpen(l){this.readyState===pi.CONNECTING?(l&&l.hostname&&(this.location.base=sd(this.location.base,l.hostname)),this.readyState=pi.OPEN,this.onopen&&this.onopen()):this.onClose(1006,"Server lost session",!0)}onEvent(l){this.readyState===pi.OPEN&&this.onmessage&&this.onmessage({data:l})}onActivity(){this.onactivity&&this.onactivity()}onError(l){this.onerror&&this.onerror(l)}openStream(){this.stream=Xt.createSocketRequest("POST",Gc(this.hooks.getReceiveURL(this.location,this.session))),this.stream.bind("chunk",l=>{this.onChunk(l)}),this.stream.bind("finished",l=>{this.hooks.onFinished(this,l)}),this.stream.bind("buffer_too_long",()=>{this.reconnect()});try{this.stream.start()}catch(l){et.defer(()=>{this.onError(l),this.onClose(1006,"Could not start streaming",!1)})}}closeStream(){this.stream&&(this.stream.unbind_all(),this.stream.close(),this.stream=null)}}function nd(v){var l=/([^\?]*)\/*(\??.*)/.exec(v);return{base:l[1],queryString:l[2]}}function id(v,l){return v.base+"/"+l+"/xhr_send"}function Gc(v){var l=v.indexOf("?")===-1?"?":"&";return v+l+"t="+ +new Date+"&n="+td++}function sd(v,l){var g=/(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(v);return g[1]+l+g[3]}function Vc(v){return Xt.randomInt(v)}function rd(v){for(var l=[],g=0;g<v;g++)l.push(Vc(32).toString(32));return l.join("")}var od=ed,ad={getReceiveURL:function(v,l){return v.base+"/"+l+"/xhr_streaming"+v.queryString},onHeartbeat:function(v){v.sendRaw("[]")},sendHeartbeat:function(v){v.sendRaw("[]")},onFinished:function(v,l){v.onClose(1006,"Connection interrupted ("+l+")",!1)}},cd=ad,ld={getReceiveURL:function(v,l){return v.base+"/"+l+"/xhr"+v.queryString},onHeartbeat:function(){},sendHeartbeat:function(v){v.sendRaw("[]")},onFinished:function(v,l){l===200?v.reconnect():v.onClose(1006,"Connection interrupted ("+l+")",!1)}},hd=ld,ud={getRequest:function(v){var l=Xt.getXHRAPI(),g=new l;return g.onreadystatechange=g.onprogress=function(){switch(g.readyState){case 3:g.responseText&&g.responseText.length>0&&v.onChunk(g.status,g.responseText);break;case 4:g.responseText&&g.responseText.length>0&&v.onChunk(g.status,g.responseText),v.emit("finished",g.status),v.close();break}},g},abortRequest:function(v){v.onreadystatechange=null,v.abort()}},dd=ud,fd={createStreamingSocket(v){return this.createSocket(cd,v)},createPollingSocket(v){return this.createSocket(hd,v)},createSocket(v,l){return new od(v,l)},createXHR(v,l){return this.createRequest(dd,v,l)},createRequest(v,l,g){return new Qu(v,l,g)}},Wc=fd;Wc.createXDR=function(v,l){return this.createRequest(Ku,v,l)};var pd=Wc,md={nextAuthCallbackID:1,auth_callbacks:{},ScriptReceivers:o,DependenciesReceivers:d,getDefaultStrategy:Tn,Transports:Js,transportConnectionInitializer:tr,HTTPFactory:pd,TimelineTransport:St,getXHRAPI(){return window.XMLHttpRequest},getWebSocketAPI(){return window.WebSocket||window.MozWebSocket},setup(v){window.Pusher=v;var l=()=>{this.onDocumentBody(v.ready)};window.JSON?l():f.load("json2",{},l)},getDocument(){return document},getProtocol(){return this.getDocument().location.protocol},getAuthorizers(){return{ajax:E,jsonp:Pt}},onDocumentBody(v){document.body?v():setTimeout(()=>{this.onDocumentBody(v)},0)},createJSONPRequest(v,l){return new yt(v,l)},createScriptRequest(v){return new _t(v)},getLocalStorage(){try{return window.localStorage}catch{return}},createXHR(){return this.getXHRAPI()?this.createXMLHttpRequest():this.createMicrosoftXHR()},createXMLHttpRequest(){var v=this.getXHRAPI();return new v},createMicrosoftXHR(){return new ActiveXObject("Microsoft.XMLHTTP")},getNetwork(){return Qs},createWebSocket(v){var l=this.getWebSocketAPI();return new l(v)},createSocketRequest(v,l){if(this.isXHRSupported())return this.HTTPFactory.createXHR(v,l);if(this.isXDRSupported(l.indexOf("https:")===0))return this.HTTPFactory.createXDR(v,l);throw"Cross-origin HTTP requests are not supported"},isXHRSupported(){var v=this.getXHRAPI();return!!v&&new v().withCredentials!==void 0},isXDRSupported(v){var l=v?"https:":"http:",g=this.getProtocol();return!!window.XDomainRequest&&g===l},addUnloadListener(v){window.addEventListener!==void 0?window.addEventListener("unload",v,!1):window.attachEvent!==void 0&&window.attachEvent("onunload",v)},removeUnloadListener(v){window.addEventListener!==void 0?window.removeEventListener("unload",v,!1):window.detachEvent!==void 0&&window.detachEvent("onunload",v)},randomInt(v){return Math.floor(function(){return(window.crypto||window.msCrypto).getRandomValues(new Uint32Array(1))[0]/Math.pow(2,32)}()*v)}},Xt=md,go;(function(v){v[v.ERROR=3]="ERROR",v[v.INFO=6]="INFO",v[v.DEBUG=7]="DEBUG"})(go||(go={}));var er=go;class gd{constructor(l,g,C){this.key=l,this.session=g,this.events=[],this.options=C||{},this.sent=0,this.uniqueID=0}log(l,g){l<=this.options.level&&(this.events.push(ot({},g,{timestamp:et.now()})),this.options.limit&&this.events.length>this.options.limit&&this.events.shift())}error(l){this.log(er.ERROR,l)}info(l){this.log(er.INFO,l)}debug(l){this.log(er.DEBUG,l)}isEmpty(){return this.events.length===0}send(l,g){var C=ot({session:this.session,bundle:this.sent+1,key:this.key,lib:"js",version:this.options.version,cluster:this.options.cluster,features:this.options.features,timeline:this.events},this.options.params);return this.events=[],l(C,(D,tt)=>{D||this.sent++,g&&g(D,tt)}),!0}generateUniqueID(){return this.uniqueID++,this.uniqueID}}class _d{constructor(l,g,C,D){this.name=l,this.priority=g,this.transport=C,this.options=D||{}}isSupported(){return this.transport.isSupported({useTLS:this.options.useTLS})}connect(l,g){if(this.isSupported()){if(this.priority<l)return Xc(new M,g)}else return Xc(new R,g);var C=!1,D=this.transport.createConnection(this.name,this.priority,this.options.key,this.options),tt=null,dt=function(){D.unbind("initialized",dt),D.connect()},Rt=function(){tt=Wt.createHandshake(D,function(Ce){C=!0,ce(),g(null,Ce)})},Gt=function(Ce){ce(),g(Ce)},se=function(){ce();var Ce;Ce=V(D),g(new S(Ce))},ce=function(){D.unbind("initialized",dt),D.unbind("open",Rt),D.unbind("error",Gt),D.unbind("closed",se)};return D.bind("initialized",dt),D.bind("open",Rt),D.bind("error",Gt),D.bind("closed",se),D.initialize(),{abort:()=>{C||(ce(),tt?tt.close():D.close())},forceMinPriority:Ce=>{C||this.priority<Ce&&(tt?tt.close():D.close())}}}}function Xc(v,l){return et.defer(function(){l(v)}),{abort:function(){},forceMinPriority:function(){}}}const{Transports:vd}=Xt;var xd=function(v,l,g,C,D,tt){var dt=vd[g];if(!dt)throw new P(g);var Rt=(!v.enabledTransports||bt(v.enabledTransports,l)!==-1)&&(!v.disabledTransports||bt(v.disabledTransports,l)===-1),Gt;return Rt?(D=Object.assign({ignoreNullOrigin:v.ignoreNullOrigin},D),Gt=new _d(l,C,tt?tt.getAssistant(dt):dt,D)):Gt=yd,Gt},yd={isSupported:function(){return!1},connect:function(v,l){var g=et.defer(function(){l(new R)});return{abort:function(){g.ensureAborted()},forceMinPriority:function(){}}}};function Sd(v){if(v==null)throw"You must pass an options object";if(v.cluster==null)throw"Options object must provide a cluster";"disableStats"in v&&J.warn("The disableStats option is deprecated in favor of enableStats")}const Md=(v,l)=>{var g="socket_id="+encodeURIComponent(v.socketId);for(var C in l.params)g+="&"+encodeURIComponent(C)+"="+encodeURIComponent(l.params[C]);if(l.paramsProvider!=null){let D=l.paramsProvider();for(var C in D)g+="&"+encodeURIComponent(C)+"="+encodeURIComponent(D[C])}return g};var Ed=v=>{if(typeof Xt.getAuthorizers()[v.transport]>"u")throw`'${v.transport}' is not a recognized auth transport`;return(l,g)=>{const C=Md(l,v);Xt.getAuthorizers()[v.transport](Xt,C,v,y.UserAuthentication,g)}};const bd=(v,l)=>{var g="socket_id="+encodeURIComponent(v.socketId);g+="&channel_name="+encodeURIComponent(v.channelName);for(var C in l.params)g+="&"+encodeURIComponent(C)+"="+encodeURIComponent(l.params[C]);if(l.paramsProvider!=null){let D=l.paramsProvider();for(var C in D)g+="&"+encodeURIComponent(C)+"="+encodeURIComponent(D[C])}return g};var wd=v=>{if(typeof Xt.getAuthorizers()[v.transport]>"u")throw`'${v.transport}' is not a recognized auth transport`;return(l,g)=>{const C=bd(l,v);Xt.getAuthorizers()[v.transport](Xt,C,v,y.ChannelAuthorization,g)}};const Td=(v,l,g)=>{const C={authTransport:l.transport,authEndpoint:l.endpoint,auth:{params:l.params,headers:l.headers}};return(D,tt)=>{const dt=v.channel(D.channelName);g(dt,C).authorize(D.socketId,tt)}};function Ad(v,l){let g={activityTimeout:v.activityTimeout||c.activityTimeout,cluster:v.cluster,httpPath:v.httpPath||c.httpPath,httpPort:v.httpPort||c.httpPort,httpsPort:v.httpsPort||c.httpsPort,pongTimeout:v.pongTimeout||c.pongTimeout,statsHost:v.statsHost||c.stats_host,unavailableTimeout:v.unavailableTimeout||c.unavailableTimeout,wsPath:v.wsPath||c.wsPath,wsPort:v.wsPort||c.wsPort,wssPort:v.wssPort||c.wssPort,enableStats:Dd(v),httpHost:Cd(v),useTLS:Ld(v),wsHost:Rd(v),userAuthenticator:Id(v),channelAuthorizer:Nd(v,l)};return"disabledTransports"in v&&(g.disabledTransports=v.disabledTransports),"enabledTransports"in v&&(g.enabledTransports=v.enabledTransports),"ignoreNullOrigin"in v&&(g.ignoreNullOrigin=v.ignoreNullOrigin),"timelineParams"in v&&(g.timelineParams=v.timelineParams),"nacl"in v&&(g.nacl=v.nacl),g}function Cd(v){return v.httpHost?v.httpHost:v.cluster?`sockjs-${v.cluster}.pusher.com`:c.httpHost}function Rd(v){return v.wsHost?v.wsHost:Pd(v.cluster)}function Pd(v){return`ws-${v}.pusher.com`}function Ld(v){return Xt.getProtocol()==="https:"?!0:v.forceTLS!==!1}function Dd(v){return"enableStats"in v?v.enableStats:"disableStats"in v?!v.disableStats:!1}function Id(v){const l=Object.assign(Object.assign({},c.userAuthentication),v.userAuthentication);return"customHandler"in l&&l.customHandler!=null?l.customHandler:Ed(l)}function Ud(v,l){let g;return"channelAuthorization"in v?g=Object.assign(Object.assign({},c.channelAuthorization),v.channelAuthorization):(g={transport:v.authTransport||c.authTransport,endpoint:v.authEndpoint||c.authEndpoint},"auth"in v&&("params"in v.auth&&(g.params=v.auth.params),"headers"in v.auth&&(g.headers=v.auth.headers)),"authorizer"in v&&(g.customHandler=Td(l,g,v.authorizer))),g}function Nd(v,l){const g=Ud(v,l);return"customHandler"in g&&g.customHandler!=null?g.customHandler:wd(g)}class Od extends ft{constructor(l){super(function(g,C){J.debug(`No callbacks on watchlist events for ${g}`)}),this.pusher=l,this.bindWatchlistInternalEvent()}handleEvent(l){l.data.events.forEach(g=>{this.emit(g.name,g)})}bindWatchlistInternalEvent(){this.pusher.connection.bind("message",l=>{var g=l.event;g==="pusher_internal:watchlist_events"&&this.handleEvent(l)})}}function Fd(){let v,l;return{promise:new Promise((C,D)=>{v=C,l=D}),resolve:v,reject:l}}var Bd=Fd;class zd extends ft{constructor(l){super(function(g,C){J.debug("No callbacks on user for "+g)}),this.signin_requested=!1,this.user_data=null,this.serverToUserChannel=null,this.signinDonePromise=null,this._signinDoneResolve=null,this._onAuthorize=(g,C)=>{if(g){J.warn(`Error during signin: ${g}`),this._cleanup();return}this.pusher.send_event("pusher:signin",{auth:C.auth,user_data:C.user_data})},this.pusher=l,this.pusher.connection.bind("state_change",({previous:g,current:C})=>{g!=="connected"&&C==="connected"&&this._signin(),g==="connected"&&C!=="connected"&&(this._cleanup(),this._newSigninPromiseIfNeeded())}),this.watchlist=new Od(l),this.pusher.connection.bind("message",g=>{var C=g.event;C==="pusher:signin_success"&&this._onSigninSuccess(g.data),this.serverToUserChannel&&this.serverToUserChannel.name===g.channel&&this.serverToUserChannel.handleEvent(g)})}signin(){this.signin_requested||(this.signin_requested=!0,this._signin())}_signin(){this.signin_requested&&(this._newSigninPromiseIfNeeded(),this.pusher.connection.state==="connected"&&this.pusher.config.userAuthenticator({socketId:this.pusher.connection.socket_id},this._onAuthorize))}_onSigninSuccess(l){try{this.user_data=JSON.parse(l.user_data)}catch{J.error(`Failed parsing user data after signin: ${l.user_data}`),this._cleanup();return}if(typeof this.user_data.id!="string"||this.user_data.id===""){J.error(`user_data doesn't contain an id. user_data: ${this.user_data}`),this._cleanup();return}this._signinDoneResolve(),this._subscribeChannels()}_subscribeChannels(){const l=g=>{g.subscriptionPending&&g.subscriptionCancelled?g.reinstateSubscription():!g.subscriptionPending&&this.pusher.connection.state==="connected"&&g.subscribe()};this.serverToUserChannel=new A(`#server-to-user-${this.user_data.id}`,this.pusher),this.serverToUserChannel.bind_global((g,C)=>{g.indexOf("pusher_internal:")===0||g.indexOf("pusher:")===0||this.emit(g,C)}),l(this.serverToUserChannel)}_cleanup(){this.user_data=null,this.serverToUserChannel&&(this.serverToUserChannel.unbind_all(),this.serverToUserChannel.disconnect(),this.serverToUserChannel=null),this.signin_requested&&this._signinDoneResolve()}_newSigninPromiseIfNeeded(){if(!this.signin_requested||this.signinDonePromise&&!this.signinDonePromise.done)return;const{promise:l,resolve:g}=Bd();l.done=!1;const C=()=>{l.done=!0};l.then(C).catch(C),this.signinDonePromise=l,this._signinDoneResolve=g}}class ke{static ready(){ke.isReady=!0;for(var l=0,g=ke.instances.length;l<g;l++)ke.instances[l].connect()}static getClientFeatures(){return Dt(Zt({ws:Xt.Transports.ws},function(l){return l.isSupported({})}))}constructor(l,g){kd(l),Sd(g),this.key=l,this.config=Ad(g,this),this.channels=Wt.createChannels(),this.global_emitter=new ft,this.sessionID=Xt.randomInt(1e9),this.timeline=new gd(this.key,this.sessionID,{cluster:this.config.cluster,features:ke.getClientFeatures(),params:this.config.timelineParams||{},limit:50,level:er.INFO,version:c.VERSION}),this.config.enableStats&&(this.timelineSender=Wt.createTimelineSender(this.timeline,{host:this.config.statsHost,path:"/timeline/v2/"+Xt.TimelineTransport.name}));var C=D=>Xt.getDefaultStrategy(this.config,D,xd);this.connection=Wt.createConnectionManager(this.key,{getStrategy:C,timeline:this.timeline,activityTimeout:this.config.activityTimeout,pongTimeout:this.config.pongTimeout,unavailableTimeout:this.config.unavailableTimeout,useTLS:!!this.config.useTLS}),this.connection.bind("connected",()=>{this.subscribeAll(),this.timelineSender&&this.timelineSender.send(this.connection.isUsingTLS())}),this.connection.bind("message",D=>{var tt=D.event,dt=tt.indexOf("pusher_internal:")===0;if(D.channel){var Rt=this.channel(D.channel);Rt&&Rt.handleEvent(D)}dt||this.global_emitter.emit(D.event,D.data)}),this.connection.bind("connecting",()=>{this.channels.disconnect()}),this.connection.bind("disconnected",()=>{this.channels.disconnect()}),this.connection.bind("error",D=>{J.warn(D)}),ke.instances.push(this),this.timeline.info({instances:ke.instances.length}),this.user=new zd(this),ke.isReady&&this.connect()}channel(l){return this.channels.find(l)}allChannels(){return this.channels.all()}connect(){if(this.connection.connect(),this.timelineSender&&!this.timelineSenderTimer){var l=this.connection.isUsingTLS(),g=this.timelineSender;this.timelineSenderTimer=new zt(6e4,function(){g.send(l)})}}disconnect(){this.connection.disconnect(),this.timelineSenderTimer&&(this.timelineSenderTimer.ensureAborted(),this.timelineSenderTimer=null)}bind(l,g,C){return this.global_emitter.bind(l,g,C),this}unbind(l,g,C){return this.global_emitter.unbind(l,g,C),this}bind_global(l){return this.global_emitter.bind_global(l),this}unbind_global(l){return this.global_emitter.unbind_global(l),this}unbind_all(l){return this.global_emitter.unbind_all(),this}subscribeAll(){var l;for(l in this.channels.channels)this.channels.channels.hasOwnProperty(l)&&this.subscribe(l)}subscribe(l){var g=this.channels.add(l,this);return g.subscriptionPending&&g.subscriptionCancelled?g.reinstateSubscription():!g.subscriptionPending&&this.connection.state==="connected"&&g.subscribe(),g}unsubscribe(l){var g=this.channels.find(l);g&&g.subscriptionPending?g.cancelSubscription():(g=this.channels.remove(l),g&&g.subscribed&&g.unsubscribe())}send_event(l,g,C){return this.connection.send_event(l,g,C)}shouldUseTLS(){return this.config.useTLS}signin(){this.user.signin()}}ke.instances=[],ke.isReady=!1,ke.logToConsole=!1,ke.Runtime=Xt,ke.ScriptReceivers=Xt.ScriptReceivers,ke.DependenciesReceivers=Xt.DependenciesReceivers,ke.auth_callbacks=Xt.auth_callbacks;var _o=n.default=ke;function kd(v){if(v==null)throw"You must pass your app key when you instantiate Pusher."}Xt.setup(ke)})])})})(ca)),ca.exports}var Jx=Kx();const Qx=$x(Jx);let Hs=null,Ee=null,si=null,oo=!1,Ci=null;const Lh="ABCDEFGHJKLMNPQRSTUVWXYZ";function ty(){let i="";for(let t=0;t<4;t++)i+=Lh[Math.floor(Math.random()*Lh.length)];return i}function ey(i){return`presence-room-${i}`}let Ps=null,ac=null,cc=null,lc=null,hc=null,uc=null;function ny({opponentJoined:i,opponentLeft:t,seed:e,opponentScore:n,opponentLeave:s,opponentRematch:r}){Ps=i||null,ac=t||null,cc=e||null,lc=n||null,hc=s||null,uc=r||null}function ku(){Hs||(Hs=new Qx("78fc69a4cee22b1b4138",{cluster:"us2",authEndpoint:"/api/pusher-auth"}))}function iy(){return ku(),oo=!0,Ci=ty(),Hu(Ci),Ci}function sy(i){return ku(),oo=!1,Ci=i.toUpperCase(),Hu(Ci),Ci}function Hu(i){Ee&&(Ee.unbind_all(),Hs.unsubscribe(Ee.name)),Ee=Hs.subscribe(ey(i)),Ee.bind("pusher:subscription_succeeded",t=>{si=t.myID,t.count>1&&Ps&&Ps()}),Ee.bind("pusher:member_added",()=>{Ps&&Ps()}),Ee.bind("pusher:member_removed",()=>{ac&&ac()}),Ee.bind("client-seed",t=>{cc&&cc(t)}),Ee.bind("client-score",t=>{t.userId!==si&&lc&&lc(t)}),Ee.bind("client-leave",t=>{t.userId!==si&&hc&&hc()}),Ee.bind("client-rematch",t=>{t.userId!==si&&uc&&uc()})}function ry(i,t){Ee&&Ee.trigger("client-seed",{round:i,seed:t,userId:si})}function oy(i,t){Ee&&Ee.trigger("client-score",{round:i,...t,userId:si})}function ay(){Ee&&Ee.trigger("client-leave",{userId:si})}function cy(){Ee&&Ee.trigger("client-rematch",{userId:si})}function ly(){Ee&&(ay(),Ee.unbind_all(),Hs.unsubscribe(Ee.name),Ee=null),Ci=null,oo=!1}function Zs(){return oo}const Gu=3,hy=9e4,Dh=5e3;let Ke=0,ci=[],li=[],Wr=null,Is=null,ao=!1,co=!1,lo=!1,dc=null,Gs=null,Ls=null,fc=null,Vs=null,pc=null,mc=null,gc=null;function uy({matchStart:i,roundStart:t,opponentScored:e,matchEnd:n,disconnected:s,waiting:r,rematchAccepted:o,opponentWantsRematch:a}){dc=i||null,Gs=t||null,Ls=e||null,fc=n||null,Vs=s||null,pc=r||null,mc=o||null,gc=a||null}function Oc(){Ke=0,ci=[],li=[],ao=!1,co=!1,lo=!1,ms(),Fc()}function ms(){Wr&&(clearTimeout(Wr),Wr=null)}function Fc(){Is&&(clearTimeout(Is),Is=null)}function dy(){ms(),Wr=setTimeout(()=>{Vs&&Vs(),zc()},hy)}function fy(){Oc();const i=iy();return Vu(),i}function py(i){Oc(),sy(i),Vu()}function Vu(){ny({opponentJoined:my,opponentLeft:Ih,seed:gy,opponentScore:_y,opponentLeave:Ih,opponentRematch:yy})}function my(){dc&&dc(),Zs()&&Bc()}function Ih(){ms(),Fc(),!ao&&Vs&&Vs()}function Bc(){Ke++;const i=Math.random()*2147483647;Zs()&&ry(Ke,i),Gs&&Gs(Ke,i)}function gy(i){Zs()||(Ke=i.round,Gs&&Gs(i.round,i.seed))}function Uh(i){oy(Ke,i),ci.push(i),li.length>=Ke?Wu():(dy(),pc&&pc(i))}function _y(i){ms(),li.push({score:i.score,grade:i.grade,pctA:i.pctA,pctB:i.pctB}),ci.length>=Ke&&Wu()}function Wu(){ms();const i=ci[Ke-1],t=li[Ke-1];Ke>=Gu?(Ls&&Ls(Ke,i,t),Is=setTimeout(()=>{ao=!0;const e=vy();fc&&fc(e)},Dh)):(Ls&&Ls(Ke,i,t),Is=setTimeout(()=>{Zs()&&Bc()},Dh))}function vy(){const i=ci.reduce((n,s)=>n+s.score,0)/ci.length,t=li.reduce((n,s)=>n+s.score,0)/li.length;let e;return i===t?e="tie":i>t?e="win":e="lose",{outcome:e,myScores:[...ci],opponentScores:[...li],myAvg:Math.round(i*10)/10,oppAvg:Math.round(t*10)/10}}function xy(){co=!0,cy(),lo&&Xu()}function yy(){lo=!0,co?Xu():gc&&gc()}function Xu(){Ke=0,ci=[],li=[],ao=!1,co=!1,lo=!1,Fc(),ms(),mc&&mc(),Zs()&&Bc()}function zc(){Oc(),ly()}function Sy(){return Ke}function qu(){return Gu}const Hn={MENU:-1,PLAYING:0,CUTTING:1,SCORED:2};let ri=Hn.MENU,ui="single";const My=document.getElementById("game-canvas"),{renderer:Yu,scene:Se,camera:Ri}=yv(My);let ue=null,en=null,Pe=null,Ws=[],ze=null,Pi=null;const ho=new gx({onTick:bx,onExpire:()=>ju()});function kc(i=null){ue&&Se.remove(ue),Ws.forEach(r=>Se.remove(r)),Ws=[],ze&&(Se.remove(ze),ze.geometry.dispose(),ze=null),en&&Se.remove(en),Pe&&(Se.remove(Pe.transform.getHelper()),Pe.dispose()),Pi&&(Se.remove(Pi.group),Pi=null);const t=i!==null?i:Math.random();ue=Av(t);const e=yu(t*2147483647+7919|0),n=e()*Math.PI*2,s=.08+e()*.14;ue.position.set(Math.cos(n)*s,.8,Math.sin(n)*s*.6),ue.castShadow=!0,ue.receiveShadow=!0,ue.rotation.set(e()*Math.PI*2,e()*Math.PI*2,e()*Math.PI*2),Se.add(ue),en=Cv(),en.position.set(0,.8,0),en.rotation.set((e()-.5)*1,(e()-.5)*1,0),Se.add(en),Ri.position.set(0,1.2,3),Ri.lookAt(0,.8,0),Pe=Jv(Ri,Yu,en),Pe.orbit.target.set(0,.8,0),Se.add(Pe.transform.getHelper()),ri=Hn.PLAYING,Sx(),Pu(),Ic(),Nc(),Lc(!0),Dc(!0),Ru(!0),ui==="versus"&&Fx(Sy(),qu()),ho.start()}async function ju(){if(ri!==Hn.PLAYING)return;ri=Hn.CUTTING,ho.stop(),Lc(!1),Dc(!1),Pe.transform.detach(),Pe.transform.getHelper().visible=!1,Pe.orbit.enabled=!1,ze&&(Se.remove(ze),ze.geometry.dispose(),ze=null);const i=Su(en);ue.updateMatrixWorld(!0);const t=new fe().copy(ue.matrixWorld).invert(),e=i.clone().applyMatrix4(t),n=tx(ue.geometry,e);if(!n){console.warn("Cut missed the potato!");const y={grade:"F",score:0,pctA:"100.0",pctB:"0.0"};ui==="versus"?Uh(y):Ch(y),ri=Hn.SCORED,Pe.orbit.enabled=!0;return}const s=ra(n.front),r=ra(n.back),o=ra(ue.geometry);console.log(`Volume check: front=${s.toFixed(4)} + back=${r.toFixed(4)} = ${(s+r).toFixed(4)}, original=${o.toFixed(4)}`);const a=ue.material.clone(),c=new at(n.front,a),h=new at(n.back,a.clone());c.castShadow=!0,c.receiveShadow=!0,h.castShadow=!0,h.receiveShadow=!0,c.position.copy(ue.position),c.quaternion.copy(ue.quaternion),c.scale.copy(ue.scale),h.position.copy(ue.position),h.quaternion.copy(ue.quaternion),h.scale.copy(ue.scale),Se.remove(ue),Se.remove(en),Se.add(c),Se.add(h),Ws=[c,h];const d=i.normal.clone();Pi=await mx(c,h,d,Ri,Pe.orbit,Se,s,r);const{score:f,grade:p,pctA:_,pctB:x}=ax(s,r);Tx(_,x),await new Promise(y=>setTimeout(y,900)),Ic(),ui==="versus"?Uh({score:f,grade:p,pctA:_,pctB:x}):Ch({grade:p,score:f,pctA:_,pctB:x}),ri=Hn.SCORED,Pe.orbit.enabled=!0}function Hc(){ho.stop(),ue&&(Se.remove(ue),ue=null),Ws.forEach(i=>Se.remove(i)),Ws=[],ze&&(Se.remove(ze),ze.geometry.dispose(),ze=null),en&&(Se.remove(en),en=null),Pe&&(Se.remove(Pe.transform.getHelper()),Pe.dispose(),Pe=null),Pi&&(Se.remove(Pi.group),Pi=null),ui==="versus"&&zc(),ui="single",Ri.position.set(2,2.5,4),Ri.lookAt(0,.5,0),ri=Hn.MENU,so(),Lc(!1),Dc(!1),Ru(!1),Pu(),Ic(),Nc()}uy({matchStart:()=>{Uc()},roundStart:(i,t)=>{rc(),oc(),sc(),kc(t)},opponentScored:(i,t,e)=>{sc(),ic(),kx(i,t,e,qu())},matchEnd:i=>{rc(),ic(),Gx(i)},disconnected:()=>{ho.stop(),Nc(),Yx()},waiting:i=>{zx(i)},rematchAccepted:()=>{oc()},opponentWantsRematch:()=>{qx()}});wx(()=>ju());Ax(()=>kc());Mx(()=>kc());Ex(()=>Hc());Lx(()=>{document.getElementById("home-screen").classList.add("hidden"),Px()});Dx(()=>{ui="versus";const i=fy();ro(),zu(i)});Ix(()=>{const i=Nx();i.length===4&&(ui="versus",ro(),zu(i),py(i))});Ux(()=>{ro(),so()});Ox(()=>{zc(),ui="single",Uc(),so()});Wx(()=>{Xx(),xy()});Vx(()=>{Hc()});Zx(()=>{Hc()});function Ey(){if(ze&&(Se.remove(ze),ze.geometry.dispose(),ze=null),ri!==Hn.PLAYING||!ue||!en)return;const i=Su(en);ue.updateMatrixWorld(!0);const t=new fe().copy(ue.matrixWorld).invert(),e=i.clone().applyMatrix4(t),n=ue.geometry.getAttribute("position"),s=n.count/3,r=[];for(let c=0;c<s;c++){const h=[];for(let f=0;f<3;f++)h.push(new I().fromBufferAttribute(n,c*3+f));const d=h.map(f=>e.distanceToPoint(f));for(let f=0;f<3;f++){const p=(f+1)%3;if(d[f]>0&&d[p]<0||d[f]<0&&d[p]>0){const _=d[f]/(d[f]-d[p]),x=new I().lerpVectors(h[f],h[p],_);x.applyMatrix4(ue.matrixWorld),r.push(x)}}}if(r.length<2)return;const o=new He().setFromPoints(r),a=new to({color:16763904,linewidth:2});ze=new pu(o,a),Se.add(ze)}let by=0;function Zu(){requestAnimationFrame(Zu),Pe!=null&&Pe.orbit&&Pe.orbit.update(),ri===Hn.PLAYING&&++by%5===0&&Ey(),Yu.render(Se,Ri)}so();Zu();
