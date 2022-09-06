"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={id:"block-loadbalancer-services",title:"Block Services with type LoadBalancer"},o="Block Services with type LoadBalancer",c={unversionedId:"block-loadbalancer-services",id:"block-loadbalancer-services",title:"Block Services with type LoadBalancer",description:"Description",source:"@site/docs/block-loadbalancer-services.md",sourceDirName:".",slug:"/block-loadbalancer-services",permalink:"/gatekeeper-library/block-loadbalancer-services",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/block-loadbalancer-services.md",tags:[],version:"current",frontMatter:{id:"block-loadbalancer-services",title:"Block Services with type LoadBalancer"},sidebar:"docs",previous:{title:"Kubernetes Block Endpoint Edit Default Role",permalink:"/gatekeeper-library/block-endpoint-edit-default-role"},next:{title:"Block NodePort",permalink:"/gatekeeper-library/block-nodeport-services"}},i={},s=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"block-services-with-type-loadbalancer"},"Block Services with type LoadBalancer"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Disallows all Services with type LoadBalancer.\n",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer"},"https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer")),(0,a.kt)("h2",{id:"template"},"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8sblockloadbalancer\n  annotations:\n    metadata.gatekeeper.sh/title : "Block Services with type LoadBalancer"\n    description: >-\n      Disallows all Services with type LoadBalancer.\n\n      https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sBlockLoadBalancer\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8sblockloadbalancer\n\n        violation[{"msg": msg}] {\n          input.review.kind.kind == "Service"\n          input.review.object.spec.type == "LoadBalancer"\n          msg := "User is not allowed to create service of type LoadBalancer"\n        }\n\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"block-loadbalancer-services"),(0,a.kt)("blockquote",null,(0,a.kt)("details",null,(0,a.kt)("summary",null,"constraint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sBlockLoadBalancer\nmetadata:\n  name: block-load-balancer\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Service"]\n    excludedNamespaces:\n      - "ingress-nginx-private"\n      - "ingress-nginx-public"\n\n'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"example-allowed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service-allowed\nspec:\n  type: ClusterIP\n  ports:\n    - port: 80\n      targetPort: 80\n\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"example-disallowed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service-disallowed\nspec:\n  type: LoadBalancer\n  ports:\n    - port: 80\n      targetPort: 80\n      nodePort: 30007\n\n"))))))}d.isMDXComponent=!0}}]);