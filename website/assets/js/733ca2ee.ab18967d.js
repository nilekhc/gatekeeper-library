"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[293],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=s,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(h,r(r({ref:n},l),{},{components:t})):a.createElement(h,r({ref:n},l))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3530:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),s=(t(7294),t(3905));const o={id:"host-namespaces",title:"Host Namespace"},r="Host Namespace",i={unversionedId:"host-namespaces",id:"host-namespaces",title:"Host Namespace",description:"Description",source:"@site/docs/host-namespaces.md",sourceDirName:".",slug:"/host-namespaces",permalink:"/gatekeeper-library/host-namespaces",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/host-namespaces.md",tags:[],version:"current",frontMatter:{id:"host-namespaces",title:"Host Namespace"},sidebar:"docs",previous:{title:"Host Filesystem",permalink:"/gatekeeper-library/host-filesystem"},next:{title:"Host Networking Ports",permalink:"/gatekeeper-library/host-network-ports"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],l={toc:c};function m(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"host-namespace"},"Host Namespace"),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"Disallows sharing of host PID and IPC namespaces by pod containers. Corresponds to the ",(0,s.kt)("inlineCode",{parentName:"p"},"hostPID")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"hostIPC")," fields in a PodSecurityPolicy. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#host-namespaces"},"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#host-namespaces")),(0,s.kt)("h2",{id:"template"},"Template"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8spsphostnamespace\n  annotations:\n    metadata.gatekeeper.sh/title: "Host Namespace"\n    description: >-\n      Disallows sharing of host PID and IPC namespaces by pod containers.\n      Corresponds to the `hostPID` and `hostIPC` fields in a PodSecurityPolicy.\n      For more information, see\n      https://kubernetes.io/docs/concepts/policy/pod-security-policy/#host-namespaces\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sPSPHostNamespace\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          description: >-\n            Disallows sharing of host PID and IPC namespaces by pod containers.\n            Corresponds to the `hostPID` and `hostIPC` fields in a PodSecurityPolicy.\n            For more information, see\n            https://kubernetes.io/docs/concepts/policy/pod-security-policy/#host-namespaces\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8spsphostnamespace\n\n        violation[{"msg": msg, "details": {}}] {\n            input_share_hostnamespace(input.review.object)\n            msg := sprintf("Sharing the host namespace is not allowed: %v", [input.review.object.metadata.name])\n        }\n\n        input_share_hostnamespace(o) {\n            o.spec.hostPID\n        }\n        input_share_hostnamespace(o) {\n            o.spec.hostIPC\n        }\n\n')),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"host-namespace"),(0,s.kt)("blockquote",null,(0,s.kt)("details",null,(0,s.kt)("summary",null,"constraint"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sPSPHostNamespace\nmetadata:\n  name: psp-host-namespace\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n\n'))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"example-allowed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-host-namespace-allowed\n  labels:\n    app: nginx-host-namespace\nspec:\n  hostPID: false\n  hostIPC: false\n  containers:\n  - name: nginx\n    image: nginx\n\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"example-disallowed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-host-namespace-disallowed\n  labels:\n    app: nginx-host-namespace\nspec:\n  hostPID: true\n  hostIPC: true\n  containers:\n  - name: nginx\n    image: nginx\n\n"))))))}m.isMDXComponent=!0}}]);