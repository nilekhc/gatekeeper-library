"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||s;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const s={id:"fsgroup",title:"FS Group"},a="FS Group",p={unversionedId:"fsgroup",id:"fsgroup",title:"FS Group",description:"Description",source:"@site/docs/fsgroup.md",sourceDirName:".",slug:"/fsgroup",permalink:"/gatekeeper-library/fsgroup",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/fsgroup.md",tags:[],version:"current",frontMatter:{id:"fsgroup",title:"FS Group"},sidebar:"docs",previous:{title:"Forbidden Sysctls",permalink:"/gatekeeper-library/forbidden-sysctls"},next:{title:"Host Filesystem",permalink:"/gatekeeper-library/host-filesystem"}},i={},l=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fs-group"},"FS Group"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Controls allocating an FSGroup that owns the Pod's volumes. Corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"fsGroup")," field in a PodSecurityPolicy. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#volumes-and-file-systems"},"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#volumes-and-file-systems")),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8spspfsgroup\n  annotations:\n    metadata.gatekeeper.sh/title: "FS Group"\n    description: >-\n      Controls allocating an FSGroup that owns the Pod\'s volumes. Corresponds\n      to the `fsGroup` field in a PodSecurityPolicy. For more information, see\n      https://kubernetes.io/docs/concepts/policy/pod-security-policy/#volumes-and-file-systems\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sPSPFSGroup\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          description: >-\n            Controls allocating an FSGroup that owns the Pod\'s volumes. Corresponds\n            to the `fsGroup` field in a PodSecurityPolicy. For more information, see\n            https://kubernetes.io/docs/concepts/policy/pod-security-policy/#volumes-and-file-systems\n          properties:\n            rule:\n              description: "An FSGroup rule name."\n              enum:\n                - MayRunAs\n                - MustRunAs\n                - RunAsAny\n              type: string\n            ranges:\n              type: array\n              description: "GID ranges affected by the rule."\n              items:\n                type: object\n                properties:\n                  min:\n                    description: "The minimum GID in the range, inclusive."\n                    type: integer\n                  max:\n                    description: "The maximum GID in the range, inclusive."\n                    type: integer\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8spspfsgroup\n\n        violation[{"msg": msg, "details": {}}] {\n            spec := input.review.object.spec\n            not input_fsGroup_allowed(spec)\n            msg := sprintf("The provided pod spec fsGroup is not allowed, pod: %v. Allowed fsGroup: %v", [input.review.object.metadata.name, input.parameters])\n        }\n\n        input_fsGroup_allowed(spec) {\n            # RunAsAny - No range is required. Allows any fsGroup ID to be specified.\n            input.parameters.rule == "RunAsAny"\n        }\n        input_fsGroup_allowed(spec) {\n            # MustRunAs - Validates pod spec fsgroup against all ranges\n            input.parameters.rule == "MustRunAs"\n            fg := spec.securityContext.fsGroup\n            count(input.parameters.ranges) > 0\n            range := input.parameters.ranges[_]\n            value_within_range(range, fg)\n        }\n        input_fsGroup_allowed(spec) {\n            # MayRunAs - Validates pod spec fsgroup against all ranges or allow pod spec fsgroup to be left unset\n            input.parameters.rule == "MayRunAs"\n            not has_field(spec, "securityContext")\n        }\n        input_fsGroup_allowed(spec) {\n            # MayRunAs - Validates pod spec fsgroup against all ranges or allow pod spec fsgroup to be left unset\n            input.parameters.rule == "MayRunAs"\n            not spec.securityContext.fsGroup\n        }\n        input_fsGroup_allowed(spec) {\n            # MayRunAs - Validates pod spec fsgroup against all ranges or allow pod spec fsgroup to be left unset\n            input.parameters.rule == "MayRunAs"\n            fg := spec.securityContext.fsGroup\n            count(input.parameters.ranges) > 0\n            range := input.parameters.ranges[_]\n            value_within_range(range, fg)\n        }\n        value_within_range(range, value) {\n            range.min <= value\n            range.max >= value\n        }\n        # has_field returns whether an object has a field\n        has_field(object, field) = true {\n            object[field]\n        }\n\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"fsgroup"),(0,o.kt)("blockquote",null,(0,o.kt)("details",null,(0,o.kt)("summary",null,"constraint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sPSPFSGroup\nmetadata:\n  name: psp-fsgroup\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n  parameters:\n    rule: "MayRunAs" #"MustRunAs" #"MayRunAs", "RunAsAny"\n    ranges:\n    - min: 1\n      max: 1000\n\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"example-disallowed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: fsgroup-disallowed\nspec:\n  securityContext:\n    fsGroup: 2000                           # directory will have group ID 2000\n  volumes:\n  - name: fsgroup-demo-vol\n    emptyDir: {}\n  containers:\n  - name: fsgroup-demo\n    image: busybox\n    command: [ "sh", "-c", "sleep 1h" ]\n    volumeMounts:\n    - name: fsgroup-demo-vol\n      mountPath: /data/demo\n\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"example-allowed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: fsgroup-disallowed\nspec:\n  securityContext:\n    fsGroup: 500 # directory will have group ID 500\n  volumes:\n    - name: fsgroup-demo-vol\n      emptyDir: {}\n  containers:\n    - name: fsgroup-demo\n      image: busybox\n      command: ["sh", "-c", "sleep 1h"]\n      volumeMounts:\n        - name: fsgroup-demo-vol\n          mountPath: /data/demo\n\n'))))))}c.isMDXComponent=!0}}]);