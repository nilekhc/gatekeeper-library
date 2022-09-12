"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[874],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>d});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},m=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=p(a),d=r,u=g["".concat(o,".").concat(d)]||g[d]||c[d]||l;return a?t.createElement(u,s(s({ref:n},m),{},{components:a})):t.createElement(u,s({ref:n},m))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=g;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2050:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const l={id:"disallowedtags",title:"Disallow tags"},s="Disallow tags",i={unversionedId:"disallowedtags",id:"disallowedtags",title:"Disallow tags",description:"Description",source:"@site/docs/disallowedtags.md",sourceDirName:".",slug:"/disallowedtags",permalink:"/gatekeeper-library/disallowedtags",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/disallowedtags.md",tags:[],version:"current",frontMatter:{id:"disallowedtags",title:"Disallow tags"},sidebar:"docs",previous:{title:"Disallow Anonymous Access",permalink:"/gatekeeper-library/disallowanonymous"},next:{title:"External IPs",permalink:"/gatekeeper-library/externalip"}},o={},p=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"disallow-tags"},"Disallow tags"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Requires container images to have an image tag different from the ones in the specified list.\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/containers/images/#image-names"},"https://kubernetes.io/docs/concepts/containers/images/#image-names")),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8sdisallowedtags\n  annotations:\n    metadata.gatekeeper.sh/title: "Disallow tags"\n    description: >-\n      Requires container images to have an image tag different from the ones in\n      the specified list.\n\n      https://kubernetes.io/docs/concepts/containers/images/#image-names\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sDisallowedTags\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          properties:\n            exemptImages:\n              description: >-\n                Any container that uses an image that matches an entry in this list will be excluded\n                from enforcement. Prefix-matching can be signified with `*`. For example: `my-image-*`.\n                It is recommended that users use the fully-qualified Docker image name (e.g. start with a domain name)\n                in order to avoid unexpectedly exempting images from an untrusted repository.\n              type: array\n              items:\n                type: string\n            tags:\n              type: array\n              description: Disallowed container image tags.\n              items:\n                type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8sdisallowedtags\n\n        import data.lib.exempt_container.is_exempt\n\n        violation[{"msg": msg}] {\n            container := input_containers[_]\n            not is_exempt(container)\n            tags := [forbid | tag = input.parameters.tags[_] ; forbid = endswith(container.image, concat(":", ["", tag]))]\n            any(tags)\n            msg := sprintf("container <%v> uses a disallowed tag <%v>; disallowed tags are %v", [container.name, container.image, input.parameters.tags])\n        }\n\n        violation[{"msg": msg}] {\n            container := input_containers[_]\n            not is_exempt(container)\n            tag := [contains(container.image, ":")]\n            not all(tag)\n            msg := sprintf("container <%v> didn\'t specify an image tag <%v>", [container.name, container.image])\n        }\n\n        input_containers[c] {\n            c := input.review.object.spec.containers[_]\n        }\n        input_containers[c] {\n            c := input.review.object.spec.initContainers[_]\n        }\n        input_containers[c] {\n            c := input.review.object.spec.ephemeralContainers[_]\n        }\n      libs:\n        - |\n          package lib.exempt_container\n\n          is_exempt(container) {\n              exempt_images := object.get(object.get(input, "parameters", {}), "exemptImages", [])\n              img := container.image\n              exemption := exempt_images[_]\n              _matches_exemption(img, exemption)\n          }\n\n          _matches_exemption(img, exemption) {\n              not endswith(exemption, "*")\n              exemption == img\n          }\n\n          _matches_exemption(img, exemption) {\n              endswith(exemption, "*")\n              prefix := trim_suffix(exemption, "*")\n              startswith(img, prefix)\n          }\n\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/template.yaml\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"block-endpoint-default-role"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sDisallowedTags\nmetadata:\n  name: container-image-must-not-have-latest-tag\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n    namespaces:\n      - "default"\n  parameters:\n    tags: ["latest"]\n    exemptImages: ["openpolicyagent/opa-exp:latest", "openpolicyagent/opa-exp2:latest"]\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-allowed\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"exempt-images-with-disallowed-tags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-exempt-allowed\nspec:\n  containers:\n    - name: opa-exp\n      image: openpolicyagent/opa-exp:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n    - name: opa-init\n      image: openpolicyagent/init:v1\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n    - name: opa-exp2\n      image: openpolicyagent/opa-exp2:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"no-tag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"single-disallowed-tag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed-2\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"single-disallowed-tag-ephemeral"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed-ephemeral\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n  ephemeralContainers:\n    - name: opa\n      image: openpolicyagent/opa:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"some-disallow-tags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed-3\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa-exp:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n    - name: opa-init\n      image: openpolicyagent/init:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n    - name: opa-exp2\n      image: openpolicyagent/opa-exp2:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n    - name: opa-monitor\n      image: openpolicyagent/monitor:latest\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedtags/samples/container-image-must-not-have-latest-tag/constraint.yaml\n"))))))}c.isMDXComponent=!0}}]);