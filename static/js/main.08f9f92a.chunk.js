(this["webpackJsonpwheather-app"]=this["webpackJsonpwheather-app"]||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Background.f41d5410.jpg"},61:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(0),n=s.n(c),r=s(28),i=s.n(r),o=(s(38),s(32)),h=s(10),d=s(11),l=s(13),u=s(12),g=(s(39),s(40),s(29)),m=s.n(g),v=[{weather_desc:"Sunny",icon:"../pics/svg/wi-day-sunny.svg",message:"I would like to tell you that the sun will come out, but it might not. I'm no miracle worker"},{weather_desc:"Cloudy",icon:"../pics/svg/wi-cloudy.svg",message:"I love Cloudy and cold weather. Just like today !"},{weather_desc:"Day Cloudy",icon:"../pics/svg/wi-day-cloudy.svg",message:""},{weather_desc:"Foggy",icon:"../pics/svg/wi-fog.svg",message:"A dawn with foggy weather. Do not mess with your day unless you allow it"},{weather_desc:"Windy",icon:"../pics/svg/wi-windy.svg",message:"I love Cloudy and Windy weather, Just like today!"},{weather_desc:"Light Rain",icon:"../pics/svg/wi-day-showers.svg",message:"Without rain, there is no life. Looks like you have a life today! "},{weather_desc:"Overcast",icon:"../pics/svg/",message:""},{weather_desc:"Overcast",icon:"../pics/svg/",message:""},{weather_desc:"Overcast",icon:"../pics/svg/",message:""},{weather_desc:"Overcast",icon:"../pics/svg/",message:""},{weather_desc:"Overcast",icon:"../pics/svg/",message:""},{weather_desc:"Overcast",icon:"../pics/svg/",message:""},{weather_desc:"Overcast",icon:"../pics/svg/",message:""},{weather_desc:"Overcast",icon:"../pics/svg/",message:""},{weather_desc:"Overcast",icon:"../pics/svg/",message:""}],w=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(h.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={weather:e.props.weather},e}return Object(d.a)(c,[{key:"HandleMessage",value:function(){var e=this,t=v.filter((function(t){return t.weather_desc==e.state.weather.current.weather_descriptions}));return 0===t.length?"I got nothing to say, but the weather will be kinda ".concat(this.state.weather.current.weather_descriptions):t[0].message}},{key:"render",value:function(){var e=this.state.weather;return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)("img",{src:s(42).default,alt:"",className:"background"}),Object(a.jsx)("div",{className:"Section",children:Object(a.jsxs)("div",{className:"weather-card",children:[Object(a.jsxs)("div",{className:"top-section",children:[Object(a.jsxs)("div",{className:"Date-and-Time",children:[Object(a.jsx)("p",{className:"Date",children:m()().format("Do MMMM YYYY")}),Object(a.jsx)("div",{className:"Date-underscore"}),Object(a.jsxs)("p",{className:"temperature",children:[e.current.temperature," \xb0"]}),Object(a.jsx)("div",{className:"desc",children:Object(a.jsx)("p",{children:e.current.weather_descriptions})})]}),Object(a.jsx)("div",{className:"iCon",children:Object(a.jsx)("img",{src:e.current.weather_icons,alt:""})})]}),Object(a.jsxs)("div",{className:"bottom-section",children:[Object(a.jsxs)("p",{className:"earth",children:[e.location.name,", Earth"]}),Object(a.jsx)("h4",{children:"We are living in the middle of nowhere ."}),Object(a.jsx)("p",{className:"message",children:this.HandleMessage()})]})]})})]})}}]),c}(c.Component),j=s(30),p=s(2),b=s(16),O=s.n(b);s(61);function y(){return Object(a.jsx)("div",{className:"nav",children:Object(a.jsx)("div",{className:"logo",children:"ClimaFlux"})})}var f=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(h.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={weatherData:{location:{name:"----"},current:{observation_time:"07:16 AM",temperature:"---",weather_icons:["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0003_white_cloud.png"],weather_descriptions:""}}},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://ipgeolocation.abstractapi.com/v1/?api_key=ad7b9b306bcc48d29fb4bafefdec95ed").then((function(t){O.a.get("http://api.weatherstack.com/current?access_key=49ec04613756acf55ec29ffdcd8556a0&query=".concat(t.data.city)).then((function(t){return e.setState({weatherData:t.data})}))}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)(y,{}),Object(a.jsx)(j.a,{children:Object(a.jsx)(p.a,{path:"",exact:!0,component:function(t){return Object(a.jsx)(w,Object(o.a)({weather:e.state.weatherData},t))}})})]})}}]),s}(c.Component),_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,69)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};s(67);i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),_()}},[[68,1,2]]]);
//# sourceMappingURL=main.08f9f92a.chunk.js.map