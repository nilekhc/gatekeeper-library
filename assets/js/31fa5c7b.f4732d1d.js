"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7246],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=o(t),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=t(7462),r=(t(7294),t(3905));const i={id:"replicalimits",title:"Replica Limits"},l="Replica Limits",p={unversionedId:"replicalimits",id:"replicalimits",title:"Replica Limits",description:"Description",source:"@site/docs/replicalimits.md",sourceDirName:".",slug:"/replicalimits",permalink:"/gatekeeper-library/replicalimits",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/replicalimits.md",tags:[],version:"current",frontMatter:{id:"replicalimits",title:"Replica Limits"},sidebar:"docs",previous:{title:"Pod Disruption Budget",permalink:"/gatekeeper-library/poddisruptionbudget"},next:{title:"Required Annotations",permalink:"/gatekeeper-library/requiredannotations"}},s={},o=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],c={toc:o};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"replica-limits"},"Replica Limits"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Requires that objects with the field ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.replicas")," (Deployments, ReplicaSets, etc.) specify a number of replicas within defined ranges."),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8sreplicalimits\n  annotations:\n    metadata.gatekeeper.sh/title: "Replica Limits"\n    metadata.gatekeeper.sh/version: 1.0.0\n    description: >-\n      Requires that objects with the field `spec.replicas` (Deployments,\n      ReplicaSets, etc.) specify a number of replicas within defined ranges.\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sReplicaLimits\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          properties:\n            ranges:\n              type: array\n              description: Allowed ranges for numbers of replicas.  Values are inclusive.\n              items:\n                type: object\n                description: A range of allowed replicas.  Values are inclusive.\n                properties:\n                  min_replicas:\n                    description: The minimum number of replicas allowed, inclusive.\n                    type: integer\n                  max_replicas:\n                    description: The maximum number of replicas allowed, inclusive.\n                    type: integer\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8sreplicalimits\n\n        deployment_name = input.review.object.metadata.name\n\n        violation[{"msg": msg}] {\n            spec := input.review.object.spec\n            not input_replica_limit(spec)\n            msg := sprintf("The provided number of replicas is not allowed for deployment: %v. Allowed ranges: %v", [deployment_name, input.parameters])\n        }\n\n        input_replica_limit(spec) {\n            provided := input.review.object.spec.replicas\n            count(input.parameters.ranges) > 0\n            range := input.parameters.ranges[_]\n            value_within_range(range, provided)\n        }\n\n        value_within_range(range, value) {\n            range.min_replicas <= value\n            range.max_replicas >= value\n        }\n\n')),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/replicalimits/template.yaml\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"block-endpoint-default-role"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sReplicaLimits\nmetadata:\n  name: replica-limits\nspec:\n  match:\n    kinds:\n      - apiGroups: ["apps"]\n        kinds: ["Deployment"]\n  parameters:\n    ranges:\n    - min_replicas: 3\n      max_replicas: 50\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/replicalimits/samples/replicalimits/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: allowed-deployment\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 3\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/replicalimits/samples/replicalimits/example_allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: disallowed-deployment\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 100\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/replicalimits/samples/replicalimits/example_disallowed.yaml\n"))))))}m.isMDXComponent=!0}}]);