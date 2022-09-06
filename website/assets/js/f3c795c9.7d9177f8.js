"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[875],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},m=Object.keys(e);for(i=0;i<m.length;i++)t=m[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(i=0;i<m.length;i++)t=m[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),l=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,m=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(t),g=r,f=u["".concat(s,".").concat(g)]||u[g]||p[g]||m;return t?i.createElement(f,o(o({ref:n},c),{},{components:t})):i.createElement(f,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var m=t.length,o=new Array(m);o[0]=u;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<m;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2602:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>m,metadata:()=>a,toc:()=>l});var i=t(7462),r=(t(7294),t(3905));const m={id:"containerlimits",title:"Kubernetes Container Limits"},o="Kubernetes Container Limits",a={unversionedId:"containerlimits",id:"containerlimits",title:"Kubernetes Container Limits",description:"Description",source:"@site/docs/containerlimits.md",sourceDirName:".",slug:"/containerlimits",permalink:"/gatekeeper-library/containerlimits",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/containerlimits.md",tags:[],version:"current",frontMatter:{id:"containerlimits",title:"Kubernetes Container Limits"},sidebar:"docs",previous:{title:"Block wildcard ingress",permalink:"/gatekeeper-library/block-wildcard-ingress"},next:{title:"Kubernetes Container Requests",permalink:"/gatekeeper-library/containerrequests"}},s={},l=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],c={toc:l};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kubernetes-container-limits"},"Kubernetes Container Limits"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Requires containers to have memory and CPU limits set and constrains limits to be within the specified maximum values.\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/")),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8scontainerlimits\n  annotations:\n    metadata.gatekeeper.sh/title: "Kubernetes Container Limits"\n    description: >-\n      Requires containers to have memory and CPU limits set and constrains\n      limits to be within the specified maximum values.\n\n      https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sContainerLimits\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          properties:\n            exemptImages:\n              description: >-\n                Any container that uses an image that matches an entry in this list will be excluded\n                from enforcement. Prefix-matching can be signified with `*`. For example: `my-image-*`.\n\n                It is recommended that users use the fully-qualified Docker image name (e.g. start with a domain name)\n                in order to avoid unexpectedly exempting images from an untrusted repository.\n              type: array\n              items:\n                type: string\n            cpu:\n              description: "The maximum allowed cpu limit on a Pod, exclusive."\n              type: string\n            memory:\n              description: "The maximum allowed memory limit on a Pod, exclusive."\n              type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8scontainerlimits\n\n        import data.lib.exempt_container.is_exempt\n\n        missing(obj, field) = true {\n          not obj[field]\n        }\n\n        missing(obj, field) = true {\n          obj[field] == ""\n        }\n\n        canonify_cpu(orig) = new {\n          is_number(orig)\n          new := orig * 1000\n        }\n\n        canonify_cpu(orig) = new {\n          not is_number(orig)\n          endswith(orig, "m")\n          new := to_number(replace(orig, "m", ""))\n        }\n\n        canonify_cpu(orig) = new {\n          not is_number(orig)\n          not endswith(orig, "m")\n          re_match("^[0-9]+(\\\\.[0-9]+)?$", orig)\n          new := to_number(orig) * 1000\n        }\n\n        # 10 ** 21\n        mem_multiple("E") = 1000000000000000000000 { true }\n\n        # 10 ** 18\n        mem_multiple("P") = 1000000000000000000 { true }\n\n        # 10 ** 15\n        mem_multiple("T") = 1000000000000000 { true }\n\n        # 10 ** 12\n        mem_multiple("G") = 1000000000000 { true }\n\n        # 10 ** 9\n        mem_multiple("M") = 1000000000 { true }\n\n        # 10 ** 6\n        mem_multiple("k") = 1000000 { true }\n\n        # 10 ** 3\n        mem_multiple("") = 1000 { true }\n\n        # Kubernetes accepts millibyte precision when it probably shouldn\'t.\n        # https://github.com/kubernetes/kubernetes/issues/28741\n        # 10 ** 0\n        mem_multiple("m") = 1 { true }\n\n        # 1000 * 2 ** 10\n        mem_multiple("Ki") = 1024000 { true }\n\n        # 1000 * 2 ** 20\n        mem_multiple("Mi") = 1048576000 { true }\n\n        # 1000 * 2 ** 30\n        mem_multiple("Gi") = 1073741824000 { true }\n\n        # 1000 * 2 ** 40\n        mem_multiple("Ti") = 1099511627776000 { true }\n\n        # 1000 * 2 ** 50\n        mem_multiple("Pi") = 1125899906842624000 { true }\n\n        # 1000 * 2 ** 60\n        mem_multiple("Ei") = 1152921504606846976000 { true }\n\n        get_suffix(mem) = suffix {\n          not is_string(mem)\n          suffix := ""\n        }\n\n        get_suffix(mem) = suffix {\n          is_string(mem)\n          count(mem) > 0\n          suffix := substring(mem, count(mem) - 1, -1)\n          mem_multiple(suffix)\n        }\n\n        get_suffix(mem) = suffix {\n          is_string(mem)\n          count(mem) > 1\n          suffix := substring(mem, count(mem) - 2, -1)\n          mem_multiple(suffix)\n        }\n\n        get_suffix(mem) = suffix {\n          is_string(mem)\n          count(mem) > 1\n          not mem_multiple(substring(mem, count(mem) - 1, -1))\n          not mem_multiple(substring(mem, count(mem) - 2, -1))\n          suffix := ""\n        }\n\n        get_suffix(mem) = suffix {\n          is_string(mem)\n          count(mem) == 1\n          not mem_multiple(substring(mem, count(mem) - 1, -1))\n          suffix := ""\n        }\n\n        get_suffix(mem) = suffix {\n          is_string(mem)\n          count(mem) == 0\n          suffix := ""\n        }\n\n        canonify_mem(orig) = new {\n          is_number(orig)\n          new := orig * 1000\n        }\n\n        canonify_mem(orig) = new {\n          not is_number(orig)\n          suffix := get_suffix(orig)\n          raw := replace(orig, suffix, "")\n          re_match("^[0-9]+(\\\\.[0-9]+)?$", raw)\n          new := to_number(raw) * mem_multiple(suffix)\n        }\n\n        violation[{"msg": msg}] {\n          general_violation[{"msg": msg, "field": "containers"}]\n        }\n\n        violation[{"msg": msg}] {\n          general_violation[{"msg": msg, "field": "initContainers"}]\n        }\n\n        # Ephemeral containers not checked as it is not possible to set field.\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          cpu_orig := container.resources.limits.cpu\n          not canonify_cpu(cpu_orig)\n          msg := sprintf("container <%v> cpu limit <%v> could not be parsed", [container.name, cpu_orig])\n        }\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          mem_orig := container.resources.limits.memory\n          not canonify_mem(mem_orig)\n          msg := sprintf("container <%v> memory limit <%v> could not be parsed", [container.name, mem_orig])\n        }\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          not container.resources\n          msg := sprintf("container <%v> has no resource limits", [container.name])\n        }\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          not container.resources.limits\n          msg := sprintf("container <%v> has no resource limits", [container.name])\n        }\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          missing(container.resources.limits, "cpu")\n          msg := sprintf("container <%v> has no cpu limit", [container.name])\n        }\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          missing(container.resources.limits, "memory")\n          msg := sprintf("container <%v> has no memory limit", [container.name])\n        }\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          cpu_orig := container.resources.limits.cpu\n          cpu := canonify_cpu(cpu_orig)\n          max_cpu_orig := input.parameters.cpu\n          max_cpu := canonify_cpu(max_cpu_orig)\n          cpu > max_cpu\n          msg := sprintf("container <%v> cpu limit <%v> is higher than the maximum allowed of <%v>", [container.name, cpu_orig, max_cpu_orig])\n        }\n\n        general_violation[{"msg": msg, "field": field}] {\n          container := input.review.object.spec[field][_]\n          not is_exempt(container)\n          mem_orig := container.resources.limits.memory\n          mem := canonify_mem(mem_orig)\n          max_mem_orig := input.parameters.memory\n          max_mem := canonify_mem(max_mem_orig)\n          mem > max_mem\n          msg := sprintf("container <%v> memory limit <%v> is higher than the maximum allowed of <%v>", [container.name, mem_orig, max_mem_orig])\n        }\n      libs:\n        - |\n          package lib.exempt_container\n\n          is_exempt(container) {\n              exempt_images := object.get(object.get(input, "parameters", {}), "exemptImages", [])\n              img := container.image\n              exemption := exempt_images[_]\n              _matches_exemption(img, exemption)\n          }\n\n          _matches_exemption(img, exemption) {\n              not endswith(exemption, "*")\n              exemption == img\n          }\n\n          _matches_exemption(img, exemption) {\n              endswith(exemption, "*")\n              prefix := trim_suffix(exemption, "*")\n              startswith(img, prefix)\n          }\n\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"container-limits"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sContainerLimits\nmetadata:\n  name: container-must-have-limits\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n  parameters:\n    cpu: "200m"\n    memory: "1Gi"\n\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-allowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "1Gi"\n\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-disallowed\n  labels:\n    owner: me.agilebank.demo\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "2Gi"\n'))))))}p.isMDXComponent=!0}}]);