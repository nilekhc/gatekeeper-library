"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[308],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(t),u=i,d=g["".concat(s,".").concat(u)]||g[u]||m[u]||l;return t?a.createElement(d,r(r({ref:n},c),{},{components:t})):a.createElement(d,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const l={id:"allow-privilege-escalation",title:"Allow Privilege Escalation in Container"},r="Allow Privilege Escalation in Container",o={unversionedId:"allow-privilege-escalation",id:"allow-privilege-escalation",title:"Allow Privilege Escalation in Container",description:"Description",source:"@site/docs/allow-privilege-escalation.md",sourceDirName:".",slug:"/allow-privilege-escalation",permalink:"/gatekeeper-library/allow-privilege-escalation",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/allow-privilege-escalation.md",tags:[],version:"current",frontMatter:{id:"allow-privilege-escalation",title:"Allow Privilege Escalation in Container"},sidebar:"docs",previous:{title:"Introduction",permalink:"/gatekeeper-library/pspintro"},next:{title:"App Armor",permalink:"/gatekeeper-library/apparmor"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"allow-privilege-escalation-in-container"},"Allow Privilege Escalation in Container"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Controls restricting escalation to root privileges. Corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"allowPrivilegeEscalation")," field in a PodSecurityPolicy. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#privilege-escalation"},"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#privilege-escalation")),(0,i.kt)("h2",{id:"template"},"Template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8spspallowprivilegeescalationcontainer\n  annotations:\n    metadata.gatekeeper.sh/title: "Allow Privilege Escalation in Container"\n    description: >-\n      Controls restricting escalation to root privileges. Corresponds to the\n      `allowPrivilegeEscalation` field in a PodSecurityPolicy. For more\n      information, see\n      https://kubernetes.io/docs/concepts/policy/pod-security-policy/#privilege-escalation\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sPSPAllowPrivilegeEscalationContainer\n      validation:\n        openAPIV3Schema:\n          type: object\n          description: >-\n            Controls restricting escalation to root privileges. Corresponds to the\n            `allowPrivilegeEscalation` field in a PodSecurityPolicy. For more\n            information, see\n            https://kubernetes.io/docs/concepts/policy/pod-security-policy/#privilege-escalation\n          properties:\n            exemptImages:\n              description: >-\n                Any container that uses an image that matches an entry in this list will be excluded\n                from enforcement. Prefix-matching can be signified with `*`. For example: `my-image-*`.\n\n                It is recommended that users use the fully-qualified Docker image name (e.g. start with a domain name)\n                in order to avoid unexpectedly exempting images from an untrusted repository.\n              type: array\n              items:\n                type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8spspallowprivilegeescalationcontainer\n\n        import data.lib.exempt_container.is_exempt\n\n        violation[{"msg": msg, "details": {}}] {\n            c := input_containers[_]\n            not is_exempt(c)\n            input_allow_privilege_escalation(c)\n            msg := sprintf("Privilege escalation container is not allowed: %v", [c.name])\n        }\n\n        input_allow_privilege_escalation(c) {\n            not has_field(c, "securityContext")\n        }\n        input_allow_privilege_escalation(c) {\n            not c.securityContext.allowPrivilegeEscalation == false\n        }\n        input_containers[c] {\n            c := input.review.object.spec.containers[_]\n        }\n        input_containers[c] {\n            c := input.review.object.spec.initContainers[_]\n        }\n        input_containers[c] {\n            c := input.review.object.spec.ephemeralContainers[_]\n        }\n        # has_field returns whether an object has a field\n        has_field(object, field) = true {\n            object[field]\n        }\n      libs:\n        - |\n          package lib.exempt_container\n\n          is_exempt(container) {\n              exempt_images := object.get(object.get(input, "parameters", {}), "exemptImages", [])\n              img := container.image\n              exemption := exempt_images[_]\n              _matches_exemption(img, exemption)\n          }\n\n          _matches_exemption(img, exemption) {\n              not endswith(exemption, "*")\n              exemption == img\n          }\n\n          _matches_exemption(img, exemption) {\n              endswith(exemption, "*")\n              prefix := trim_suffix(exemption, "*")\n              startswith(img, prefix)\n          }\n\n')),(0,i.kt)("p",null,"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/allow-privilege-escalation/template.yaml\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"allow-privilege-escalation"),(0,i.kt)("blockquote",null,(0,i.kt)("details",null,(0,i.kt)("summary",null,"constraint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sPSPAllowPrivilegeEscalationContainer\nmetadata:\n  name: psp-allow-privilege-escalation-container\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n\n')),(0,i.kt)("p",null,"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/allow-privilege-escalation/samples/psp-allow-privilege-escalation-container/constraint.yaml\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"example-allowed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-privilege-escalation-allowed\n  labels:\n    app: nginx-privilege-escalation\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      allowPrivilegeEscalation: false\n\n")),(0,i.kt)("p",null,"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/allow-privilege-escalation/samples/psp-allow-privilege-escalation-container/constraint.yaml\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"example-disallowed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-privilege-escalation-disallowed\n  labels:\n    app: nginx-privilege-escalation\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      allowPrivilegeEscalation: true\n\n")),(0,i.kt)("p",null,"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/allow-privilege-escalation/samples/psp-allow-privilege-escalation-container/constraint.yaml\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"disallowed-ephemeral"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-privilege-escalation-disallowed\n  labels:\n    app: nginx-privilege-escalation\nspec:\n  ephemeralContainers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      allowPrivilegeEscalation: true\n\n")),(0,i.kt)("p",null,"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/allow-privilege-escalation/samples/psp-allow-privilege-escalation-container/constraint.yaml\n"))))))}m.isMDXComponent=!0}}]);