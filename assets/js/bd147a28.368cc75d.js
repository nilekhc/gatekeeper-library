"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[444],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=s,d=u["".concat(i,".").concat(g)]||u[g]||m[g]||r;return t?a.createElement(d,l(l({ref:n},c),{},{components:t})):a.createElement(d,l({ref:n},c))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(7462),s=(t(7294),t(3905));const r={id:"httpsonly",title:"HTTPS only"},l="HTTPS only",o={unversionedId:"httpsonly",id:"httpsonly",title:"HTTPS only",description:"Description",source:"@site/docs/httpsonly.md",sourceDirName:".",slug:"/httpsonly",permalink:"/gatekeeper-library/website/httpsonly",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/httpsonly.md",tags:[],version:"current",frontMatter:{id:"httpsonly",title:"HTTPS only"},sidebar:"docs",previous:{title:"External IPs",permalink:"/gatekeeper-library/website/externalip"},next:{title:"Image Digests",permalink:"/gatekeeper-library/website/imagedigests"}},i={},p=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"https-only"},"HTTPS only"),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"Requires Ingress resources to be HTTPS only.  Ingress resources must include the ",(0,s.kt)("inlineCode",{parentName:"p"},"kubernetes.io/ingress.allow-http")," annotation, set to ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),". By default a valid TLS {} configuration is required, this can be made optional by setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"tlsOptional")," parameter to ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),".\n",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/#tls"},"https://kubernetes.io/docs/concepts/services-networking/ingress/#tls")),(0,s.kt)("h2",{id:"template"},"Template"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8shttpsonly\n  annotations:\n    metadata.gatekeeper.sh/title: "HTTPS only"\n    description: >-\n      Requires Ingress resources to be HTTPS only.  Ingress resources must\n      include the `kubernetes.io/ingress.allow-http` annotation, set to `false`.\n      By default a valid TLS {} configuration is required, this can be made\n      optional by setting the `tlsOptional` parameter to `true`.\n\n      https://kubernetes.io/docs/concepts/services-networking/ingress/#tls\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sHttpsOnly\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          description: >-\n            Requires Ingress resources to be HTTPS only.  Ingress resources must\n            include the `kubernetes.io/ingress.allow-http` annotation, set to\n            `false`. By default a valid TLS {} configuration is required, this\n            can be made optional by setting the `tlsOptional` parameter to\n            `true`.\n          properties:\n            tlsOptional:\n              type: boolean\n              description: "When set to `true` the TLS {} is optional, defaults\n              to false."\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8shttpsonly\n\n        violation[{"msg": msg}] {\n          input.review.object.kind == "Ingress"\n          re_match("^(extensions|networking.k8s.io)/", input.review.object.apiVersion)\n          ingress := input.review.object\n          not https_complete(ingress)\n          not tls_is_optional(ingress)\n          msg := sprintf("Ingress should be https. tls configuration and allow-http=false annotation are required for %v", [ingress.metadata.name])\n        }\n\n        violation[{"msg": msg}] {\n          input.review.object.kind == "Ingress"\n          re_match("^(extensions|networking.k8s.io)/", input.review.object.apiVersion)\n          ingress := input.review.object\n          not annotation_complete(ingress)\n          not tls_not_optional(ingress)\n          msg := sprintf("Ingress should be https. The allow-http=false annotation is required for %v", [ingress.metadata.name])\n        }\n\n        https_complete(ingress) = true {\n          ingress.spec["tls"]\n          count(ingress.spec.tls) > 0\n          ingress.metadata.annotations["kubernetes.io/ingress.allow-http"] == "false"\n        }\n\n        annotation_complete(ingress) = true {\n          ingress.metadata.annotations["kubernetes.io/ingress.allow-http"] == "false"\n        }\n\n        tls_is_optional(ingress) = true {\n          parameters := object.get(input, "parameters", {})\n          tlsOptional := object.get(parameters, "tlsOptional", false)\n          is_boolean(tlsOptional)\n          true == tlsOptional\n        }\n\n        tls_not_optional(ingress) = true {\n          parameters := object.get(input, "parameters", {})\n          tlsOptional := object.get(parameters, "tlsOptional", false)\n          true != tlsOptional\n        }\n\n')),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/httpsonly/template.yaml\n")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"tls-required"),(0,s.kt)("blockquote",null,(0,s.kt)("details",null,(0,s.kt)("summary",null,"constraint"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sHttpsOnly\nmetadata:\n  name: ingress-https-only\nspec:\n  match:\n    kinds:\n      - apiGroups: ["extensions", "networking.k8s.io"]\n        kinds: ["Ingress"]\n\n')),(0,s.kt)("p",null,"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/httpsonly/samples/ingress-https-only/constraint.yaml\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"example-allowed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-demo-allowed\n  annotations:\n    kubernetes.io/ingress.allow-http: "false"\nspec:\n  tls: [{}]\n  rules:\n    - host: example-host.example.com\n      http:\n        paths:\n        - pathType: Prefix\n          path: "/"\n          backend:\n            service:\n              name: nginx\n              port:\n                number: 80\n\n')),(0,s.kt)("p",null,"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/httpsonly/samples/ingress-https-only/constraint.yaml\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"example-disallowed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-demo-disallowed\nspec:\n  rules:\n    - host: example-host.example.com\n      http:\n        paths:\n        - pathType: Prefix\n          path: "/"\n          backend:\n            service:\n              name: nginx\n              port:\n                number: 80\n\n')),(0,s.kt)("p",null,"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/httpsonly/samples/ingress-https-only/constraint.yaml\n"))))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"tls-optional"),(0,s.kt)("blockquote",null,(0,s.kt)("details",null,(0,s.kt)("summary",null,"constraint"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sHttpsOnly\nmetadata:\n  name: ingress-https-only-tls-optional\nspec:\n  match:\n    kinds:\n      - apiGroups: ["extensions", "networking.k8s.io"]\n        kinds: ["Ingress"]\n  parameters:\n    tlsOptional: true\n\n')),(0,s.kt)("p",null,"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/httpsonly/samples/ingress-https-only-tls-optional/constraint.yaml\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"example-allowed-tls-optional"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-demo-allowed-tls-optional\n  annotations:\n    kubernetes.io/ingress.allow-http: "false"\nspec:\n  rules:\n    - host: example-host.example.com\n      http:\n        paths:\n        - pathType: Prefix\n          path: "/"\n          backend:\n            service:\n              name: nginx\n              port:\n                number: 80\n\n')),(0,s.kt)("p",null,"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/httpsonly/samples/ingress-https-only-tls-optional/constraint.yaml\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"example-disallowed-tls-optional"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-demo-disallowed-tls-optional\nspec:\n  rules:\n    - host: example-host.example.com\n      http:\n        paths:\n        - pathType: Prefix\n          path: "/"\n          backend:\n            service:\n              name: nginx\n              port:\n                number: 80\n\n')),(0,s.kt)("p",null,"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/httpsonly/samples/ingress-https-only-tls-optional/constraint.yaml\n"))))))}m.isMDXComponent=!0}}]);