"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[701],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),s=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return o.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,k=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return t?o.createElement(k,c(c({ref:n},l),{},{components:t})):o.createElement(k,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={id:"automount-serviceaccount-token",title:"Automount Service Account Token for Pod"},c="Automount Service Account Token for Pod",i={unversionedId:"automount-serviceaccount-token",id:"automount-serviceaccount-token",title:"Automount Service Account Token for Pod",description:"Description",source:"@site/docs/automount-serviceaccount-token.md",sourceDirName:".",slug:"/automount-serviceaccount-token",permalink:"/gatekeeper-library/automount-serviceaccount-token",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/automount-serviceaccount-token.md",tags:[],version:"current",frontMatter:{id:"automount-serviceaccount-token",title:"Automount Service Account Token for Pod"},sidebar:"docs",previous:{title:"Kubernetes Allowed Repositories",permalink:"/gatekeeper-library/allowedrepos"},next:{title:"Kubernetes Block Endpoint Edit Default Role",permalink:"/gatekeeper-library/block-endpoint-edit-default-role"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],l={toc:s};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"automount-service-account-token-for-pod"},"Automount Service Account Token for Pod"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Controls the ability of any Pod to enable automountServiceAccountToken."),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8spspautomountserviceaccounttokenpod\n  annotations:\n    metadata.gatekeeper.sh/title: "Automount Service Account Token for Pod"\n    description: >-\n      Controls the ability of any Pod to enable automountServiceAccountToken.\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sPSPAutomountServiceAccountTokenPod\n      validation:\n        openAPIV3Schema:\n          type: object\n          description: >-\n            Controls the ability of any Pod to enable automountServiceAccountToken.\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8sautomountserviceaccounttoken\n\n        violation[{"msg": msg}] {\n            obj := input.review.object\n            mountServiceAccountToken(obj.spec)\n            msg := sprintf("Automounting service account token is disallowed, pod: %v", [obj.metadata.name])\n        }\n\n        mountServiceAccountToken(spec) {\n            spec.automountServiceAccountToken == true\n        }\n\n        # if there is no automountServiceAccountToken spec, check on volumeMount in containers. Service Account token is mounted on /var/run/secrets/kubernetes.io/serviceaccount\n        # https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/#serviceaccount-admission-controller\n        mountServiceAccountToken(spec) {\n            not has_key(spec, "automountServiceAccountToken")\n            "/var/run/secrets/kubernetes.io/serviceaccount" == input_containers[_].volumeMounts[_].mountPath\n        }\n\n        input_containers[c] {\n            c := input.review.object.spec.containers[_]\n        }\n\n        input_containers[c] {\n            c := input.review.object.spec.initContainers[_]\n        }\n\n        # Ephemeral containers not checked as it is not possible to set field.\n\n        has_key(x, k) {\n            _ = x[k]\n        }\n\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"automount-serviceaccount-token"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sPSPAutomountServiceAccountTokenPod\nmetadata:\n  name: psp-automount-serviceaccount-token-pod\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n    excludedNamespaces: ["kube-system"]\n\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-automountserviceaccounttoken-allowed\n  labels:\n    app: nginx-not-automountserviceaccounttoken\nspec:\n  automountServiceAccountToken: false\n  containers:\n  - name: nginx\n    image: nginx\n\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-automountserviceaccounttoken-disallowed\n  labels:\n    app: nginx-automountserviceaccounttoken\nspec:\n  automountServiceAccountToken: true\n  containers:\n  - name: nginx\n    image: nginx\n\n"))))))}p.isMDXComponent=!0}}]);