"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[822],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),g=r,u=d["".concat(p,".").concat(g)]||d[g]||m[g]||a;return t?i.createElement(u,o(o({ref:n},c),{},{components:t})):i.createElement(u,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={id:"privileged-containers",title:"Privileged Container"},o="Privileged Container",l={unversionedId:"privileged-containers",id:"privileged-containers",title:"Privileged Container",description:"Description",source:"@site/docs/privileged-containers.md",sourceDirName:".",slug:"/privileged-containers",permalink:"/gatekeeper-library/privileged-containers",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/privileged-containers.md",tags:[],version:"current",frontMatter:{id:"privileged-containers",title:"Privileged Container"},sidebar:"docs",previous:{title:"Host Networking Ports",permalink:"/gatekeeper-library/host-network-ports"},next:{title:"Proc Mount",permalink:"/gatekeeper-library/proc-mount"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"privileged-container"},"Privileged Container"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Controls the ability of any container to enable privileged mode. Corresponds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"privileged")," field in a PodSecurityPolicy. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#privileged"},"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#privileged")),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8spspprivilegedcontainer\n  annotations:\n    metadata.gatekeeper.sh/title: "Privileged Container"\n    description: >-\n      Controls the ability of any container to enable privileged mode.\n      Corresponds to the `privileged` field in a PodSecurityPolicy. For more\n      information, see\n      https://kubernetes.io/docs/concepts/policy/pod-security-policy/#privileged\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sPSPPrivilegedContainer\n      validation:\n        openAPIV3Schema:\n          type: object\n          description: >-\n            Controls the ability of any container to enable privileged mode.\n            Corresponds to the `privileged` field in a PodSecurityPolicy. For more\n            information, see\n            https://kubernetes.io/docs/concepts/policy/pod-security-policy/#privileged\n          properties:\n            exemptImages:\n              description: >-\n                Any container that uses an image that matches an entry in this list will be excluded\n                from enforcement. Prefix-matching can be signified with `*`. For example: `my-image-*`.\n\n                It is recommended that users use the fully-qualified Docker image name (e.g. start with a domain name)\n                in order to avoid unexpectedly exempting images from an untrusted repository.\n              type: array\n              items:\n                type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8spspprivileged\n\n        import data.lib.exempt_container.is_exempt\n\n        violation[{"msg": msg, "details": {}}] {\n            c := input_containers[_]\n            not is_exempt(c)\n            c.securityContext.privileged\n            msg := sprintf("Privileged container is not allowed: %v, securityContext: %v", [c.name, c.securityContext])\n        }\n\n        input_containers[c] {\n            c := input.review.object.spec.containers[_]\n        }\n\n        input_containers[c] {\n            c := input.review.object.spec.initContainers[_]\n        }\n\n        input_containers[c] {\n            c := input.review.object.spec.ephemeralContainers[_]\n        }\n      libs:\n        - |\n          package lib.exempt_container\n\n          is_exempt(container) {\n              exempt_images := object.get(object.get(input, "parameters", {}), "exemptImages", [])\n              img := container.image\n              exemption := exempt_images[_]\n              _matches_exemption(img, exemption)\n          }\n\n          _matches_exemption(img, exemption) {\n              not endswith(exemption, "*")\n              exemption == img\n          }\n\n          _matches_exemption(img, exemption) {\n              endswith(exemption, "*")\n              prefix := trim_suffix(exemption, "*")\n              startswith(img, prefix)\n          }\n\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"privileged-containers-disallowed"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sPSPPrivilegedContainer\nmetadata:\n  name: psp-privileged-container\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n    excludedNamespaces: ["kube-system"]\n\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-privileged-disallowed\n  labels:\n    app: nginx-privileged\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      privileged: true\n\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-privileged-allowed\n  labels:\n    app: nginx-privileged\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      privileged: false\n\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"disallowed-ephemeral"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-privileged-disallowed\n  labels:\n    app: nginx-privileged\nspec:\n  ephemeralContainers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      privileged: true\n\n"))))))}m.isMDXComponent=!0}}]);