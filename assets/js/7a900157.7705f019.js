"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),k=o,m=u["".concat(i,".").concat(k)]||u[k]||d[k]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={id:"block-nodeport-services",title:"Block NodePort"},l="Block NodePort",s={unversionedId:"block-nodeport-services",id:"block-nodeport-services",title:"Block NodePort",description:"Description",source:"@site/docs/block-nodeport-services.md",sourceDirName:".",slug:"/block-nodeport-services",permalink:"/gatekeeper-library/block-nodeport-services",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/block-nodeport-services.md",tags:[],version:"current",frontMatter:{id:"block-nodeport-services",title:"Block NodePort"},sidebar:"docs",previous:{title:"Block Services with type LoadBalancer",permalink:"/gatekeeper-library/block-loadbalancer-services"},next:{title:"Block wildcard ingress",permalink:"/gatekeeper-library/block-wildcard-ingress"}},i={},c=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"block-nodeport"},"Block NodePort"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Disallows all Services with type NodePort.\n",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport")),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8sblocknodeport\n  annotations:\n    metadata.gatekeeper.sh/title: "Block NodePort"\n    description: >-\n      Disallows all Services with type NodePort.\n\n      https://kubernetes.io/docs/concepts/services-networking/service/#nodeport\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sBlockNodePort\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8sblocknodeport\n\n        violation[{"msg": msg}] {\n          input.review.kind.kind == "Service"\n          input.review.object.spec.type == "NodePort"\n          msg := "User is not allowed to create service of type NodePort"\n        }\n\n')),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/block-nodeport-services/template.yaml\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"block-nodeport-services"),(0,o.kt)("blockquote",null,(0,o.kt)("details",null,(0,o.kt)("summary",null,"constraint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sBlockNodePort\nmetadata:\n  name: block-node-port\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Service"]\n\n')),(0,o.kt)("p",null,"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/block-nodeport-services/samples/block-node-port/constraint.yaml\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"example-disallowed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service-disallowed\nspec:\n  type: NodePort\n  ports:\n    - port: 80\n      targetPort: 80\n      nodePort: 30007\n\n")),(0,o.kt)("p",null,"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/block-nodeport-services/samples/block-node-port/constraint.yaml\n"))))))}d.isMDXComponent=!0}}]);