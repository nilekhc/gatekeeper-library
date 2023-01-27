"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),p=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,y=c["".concat(i,".").concat(d)]||c[d]||u[d]||o;return n?l.createElement(y,r(r({ref:t},m),{},{components:n})):l.createElement(y,r({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const o={id:"volumes",title:"Volume Types"},r="Volume Types",s={unversionedId:"volumes",id:"volumes",title:"Volume Types",description:"Description",source:"@site/docs/volumes.md",sourceDirName:".",slug:"/volumes",permalink:"/gatekeeper-library/website/volumes",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/volumes.md",tags:[],version:"current",frontMatter:{id:"volumes",title:"Volume Types"},sidebar:"docs",previous:{title:"Allowed Users",permalink:"/gatekeeper-library/website/users"},next:{title:"allow-privilege-escalation",permalink:"/gatekeeper-library/website/mutation-allow-privilege-escalation"}},i={},p=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"volume-types"},"Volume Types"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Restricts mountable volume types to those specified by the user. Corresponds to the ",(0,a.kt)("inlineCode",{parentName:"p"},"volumes")," field in a PodSecurityPolicy. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#volumes-and-file-systems"},"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#volumes-and-file-systems")),(0,a.kt)("h2",{id:"template"},"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8spspvolumetypes\n  annotations:\n    metadata.gatekeeper.sh/title: "Volume Types"\n    metadata.gatekeeper.sh/version: 1.0.0\n    description: >-\n      Restricts mountable volume types to those specified by the user.\n      Corresponds to the `volumes` field in a PodSecurityPolicy. For more\n      information, see\n      https://kubernetes.io/docs/concepts/policy/pod-security-policy/#volumes-and-file-systems\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sPSPVolumeTypes\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          description: >-\n            Restricts mountable volume types to those specified by the user.\n            Corresponds to the `volumes` field in a PodSecurityPolicy. For more\n            information, see\n            https://kubernetes.io/docs/concepts/policy/pod-security-policy/#volumes-and-file-systems\n          properties:\n            volumes:\n              description: "`volumes` is an array of volume types. All volume types can be enabled using `*`."\n              type: array\n              items:\n                type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8spspvolumetypes\n\n        violation[{"msg": msg, "details": {}}] {\n            volume_fields := {x | input.review.object.spec.volumes[_][x]; x != "name"}\n            field := volume_fields[_]\n            not input_volume_type_allowed(field)\n            msg := sprintf("The volume type %v is not allowed, pod: %v. Allowed volume types: %v", [field, input.review.object.metadata.name, input.parameters.volumes])\n        }\n\n        # * may be used to allow all volume types\n        input_volume_type_allowed(field) {\n            input.parameters.volumes[_] == "*"\n        }\n\n        input_volume_type_allowed(field) {\n            field == input.parameters.volumes[_]\n        }\n\n')),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/volumes/template.yaml\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"host-path-disallowed"),(0,a.kt)("blockquote",null,(0,a.kt)("details",null,(0,a.kt)("summary",null,"constraint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sPSPVolumeTypes\nmetadata:\n  name: psp-volume-types\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n  parameters:\n    volumes:\n    # - "*" # * may be used to allow all volume types\n    - configMap\n    - emptyDir\n    - projected\n    - secret\n    - downwardAPI\n    - persistentVolumeClaim\n    #- hostPath #required for allowedHostPaths\n    - flexVolume #required for allowedFlexVolumes\n\n')),(0,a.kt)("p",null,"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/volumes/samples/psp-volume-types/constraint.yaml\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"example-disallowed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-volume-types-disallowed\n  labels:\n    app: nginx-volume-types\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    volumeMounts:\n    - mountPath: /cache\n      name: cache-volume\n  - name: nginx2\n    image: nginx\n    volumeMounts:\n    - mountPath: /cache2\n      name: demo-vol\n  volumes:\n  - name: cache-volume\n    hostPath:\n      path: /tmp # directory location on host\n  - name: demo-vol\n    emptyDir: {}\n\n")),(0,a.kt)("p",null,"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/volumes/samples/psp-volume-types/example_disallowed.yaml\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"example-allowed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-volume-types-allowed\n  labels:\n    app: nginx-volume-types\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    volumeMounts:\n    - mountPath: /cache\n      name: cache-volume\n  - name: nginx2\n    image: nginx\n    volumeMounts:\n    - mountPath: /cache2\n      name: demo-vol\n  volumes:\n  - name: cache-volume\n    emptyDir: {}\n  - name: demo-vol\n    emptyDir: {}\n\n")),(0,a.kt)("p",null,"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/volumes/samples/psp-volume-types/example_allowed.yaml\n"))))))}u.isMDXComponent=!0}}]);