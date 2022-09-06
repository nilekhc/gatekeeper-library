"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[127],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,y=c["".concat(i,".").concat(d)]||c[d]||u[d]||l;return t?o.createElement(y,r(r({ref:n},m),{},{components:t})):o.createElement(y,r({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<l;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3425:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const l={id:"volumes",title:"Volume Types"},r="Volume Types",s={unversionedId:"volumes",id:"volumes",title:"Volume Types",description:"Description",source:"@site/docs/volumes.md",sourceDirName:".",slug:"/volumes",permalink:"/gatekeeper-library/volumes",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/volumes.md",tags:[],version:"current",frontMatter:{id:"volumes",title:"Volume Types"},sidebar:"docs",previous:{title:"Allowed Users",permalink:"/gatekeeper-library/users"}},i={},p=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"volume-types"},"Volume Types"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Restricts mountable volume types to those specified by the user. Corresponds to the ",(0,a.kt)("inlineCode",{parentName:"p"},"volumes")," field in a PodSecurityPolicy. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#volumes-and-file-systems"},"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#volumes-and-file-systems")),(0,a.kt)("h2",{id:"template"},"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8spspvolumetypes\n  annotations:\n    metadata.gatekeeper.sh/title : "Volume Types"\n    description: >-\n      Restricts mountable volume types to those specified by the user.\n      Corresponds to the `volumes` field in a PodSecurityPolicy. For more\n      information, see\n      https://kubernetes.io/docs/concepts/policy/pod-security-policy/#volumes-and-file-systems\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sPSPVolumeTypes\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          description: >-\n            Restricts mountable volume types to those specified by the user.\n            Corresponds to the `volumes` field in a PodSecurityPolicy. For more\n            information, see\n            https://kubernetes.io/docs/concepts/policy/pod-security-policy/#volumes-and-file-systems\n          properties:\n            volumes:\n              description: "`volumes` is an array of volume types. All volume types can be enabled using `*`."\n              type: array\n              items:\n                type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8spspvolumetypes\n\n        violation[{"msg": msg, "details": {}}] {\n            volume_fields := {x | input.review.object.spec.volumes[_][x]; x != "name"}\n            field := volume_fields[_]\n            not input_volume_type_allowed(field)\n            msg := sprintf("The volume type %v is not allowed, pod: %v. Allowed volume types: %v", [field, input.review.object.metadata.name, input.parameters.volumes])\n        }\n\n        # * may be used to allow all volume types\n        input_volume_type_allowed(field) {\n            input.parameters.volumes[_] == "*"\n        }\n\n        input_volume_type_allowed(field) {\n            field == input.parameters.volumes[_]\n        }\n\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"host-path-disallowed"),(0,a.kt)("blockquote",null,(0,a.kt)("details",null,(0,a.kt)("summary",null,"constraint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sPSPVolumeTypes\nmetadata:\n  name: psp-volume-types\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n  parameters:\n    volumes:\n    # - "*" # * may be used to allow all volume types\n    - configMap\n    - emptyDir\n    - projected\n    - secret\n    - downwardAPI\n    - persistentVolumeClaim\n    #- hostPath #required for allowedHostPaths\n    - flexVolume #required for allowedFlexVolumes\n\n'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"example-disallowed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-volume-types-disallowed\n  labels:\n    app: nginx-volume-types\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    volumeMounts:\n    - mountPath: /cache\n      name: cache-volume\n  - name: nginx2\n    image: nginx\n    volumeMounts:\n    - mountPath: /cache2\n      name: demo-vol\n  volumes:\n  - name: cache-volume\n    hostPath:\n      path: /tmp # directory location on host\n  - name: demo-vol\n    emptyDir: {}\n\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"example-allowed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-volume-types-allowed\n  labels:\n    app: nginx-volume-types\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    volumeMounts:\n    - mountPath: /cache\n      name: cache-volume\n  - name: nginx2\n    image: nginx\n    volumeMounts:\n    - mountPath: /cache2\n      name: demo-vol\n  volumes:\n  - name: cache-volume\n    emptyDir: {}\n  - name: demo-vol\n    emptyDir: {}\n\n"))))))}u.isMDXComponent=!0}}]);