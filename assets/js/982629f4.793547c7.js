"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[916],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>m});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,b=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?t.createElement(b,o(o({ref:n},d),{},{components:a})):t.createElement(b,o({ref:n},d))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7009:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var t=a(7462),i=(a(7294),a(3905));const l={id:"poddisruptionbudget",title:"Pod Disruption Budget"},o="Pod Disruption Budget",r={unversionedId:"poddisruptionbudget",id:"poddisruptionbudget",title:"Pod Disruption Budget",description:"Description",source:"@site/docs/poddisruptionbudget.md",sourceDirName:".",slug:"/poddisruptionbudget",permalink:"/gatekeeper-library/poddisruptionbudget",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/poddisruptionbudget.md",tags:[],version:"current",frontMatter:{id:"poddisruptionbudget",title:"Pod Disruption Budget"},sidebar:"docs",previous:{title:"Block updating Service Account",permalink:"/gatekeeper-library/noupdateserviceaccount"},next:{title:"Replica Limits",permalink:"/gatekeeper-library/replicalimits"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p};function u(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pod-disruption-budget"},"Pod Disruption Budget"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Disallow the following scenarios when deploying PodDisruptionBudgets or resources that implement the replica subresource (e.g. Deployment, ReplicationController, ReplicaSet, StatefulSet): 1. Deployment of PodDisruptionBudgets with .spec.maxUnavailable == 0 2. Deployment of PodDisruptionBudgets with .spec.minAvailable == .spec.replicas of the resource with replica subresource This will prevent PodDisruptionBudgets from blocking voluntary disruptions such as node draining.\n",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/disruptions/"},"https://kubernetes.io/docs/concepts/workloads/pods/disruptions/")),(0,i.kt)("h2",{id:"template"},"Template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8spoddisruptionbudget\n  annotations:\n    metadata.gatekeeper.sh/title: "Pod Disruption Budget"\n    description: >-\n      Disallow the following scenarios when deploying PodDisruptionBudgets or resources that implement the replica subresource (e.g. Deployment, ReplicationController, ReplicaSet, StatefulSet):\n      1. Deployment of PodDisruptionBudgets with .spec.maxUnavailable == 0\n      2. Deployment of PodDisruptionBudgets with .spec.minAvailable == .spec.replicas of the resource with replica subresource\n      This will prevent PodDisruptionBudgets from blocking voluntary disruptions such as node draining.\n\n      https://kubernetes.io/docs/concepts/workloads/pods/disruptions/\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sPodDisruptionBudget\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8spoddisruptionbudget\n\n        violation[{"msg": msg}] {\n          input.review.kind.kind == "PodDisruptionBudget"\n          pdb := input.review.object\n\n          not valid_pdb_max_unavailable(pdb)\n          msg := sprintf(\n            "PodDisruptionBudget <%v> has maxUnavailable of 0, only positive integers are allowed for maxUnavailable",\n            [pdb.metadata.name],\n          )\n        }\n\n        violation[{"msg": msg}] {\n          obj := input.review.object\n          pdb := data.inventory.namespace[obj.metadata.namespace]["policy/v1"].PodDisruptionBudget[_]\n          obj.spec.selector.matchLabels == pdb.spec.selector.matchLabels\n\n          not valid_pdb_max_unavailable(pdb)\n          msg := sprintf(\n            "%v <%v> has been selected by PodDisruptionBudget <%v> but has maxUnavailable of 0, only positive integers are allowed for maxUnavailable",\n            [obj.kind, obj.metadata.name, pdb.metadata.name],\n          )\n        }\n\n        violation[{"msg": msg}] {\n          obj := input.review.object\n          pdb := data.inventory.namespace[obj.metadata.namespace]["policy/v1"].PodDisruptionBudget[_]\n          obj.spec.selector.matchLabels == pdb.spec.selector.matchLabels\n\n          not valid_pdb_min_available(obj, pdb)\n          msg := sprintf(\n            "%v <%v> has %v replica(s) but PodDisruptionBudget <%v> has minAvailable of %v, PodDisruptionBudget count should always be lower than replica(s), and not used when replica(s) is set to 1",\n            [obj.kind, obj.metadata.name, obj.spec.replicas, pdb.metadata.name, pdb.spec.minAvailable, obj.spec.replicas],\n          )\n        }\n\n        valid_pdb_min_available(obj, pdb) {\n          # default to -1 if minAvailable is not set so valid_pdb_min_available is always true\n          # for objects with >= 0 replicas. If minAvailable defaults to >= 0, objects with\n          # replicas field might violate this constraint if they are equal to the default set here\n          min_available := object.get(pdb.spec, "minAvailable", -1)\n          obj.spec.replicas > min_available\n        }\n\n        valid_pdb_max_unavailable(pdb) {\n          # default to 1 if maxUnavailable is not set so valid_pdb_max_unavailable always returns true.\n          # If maxUnavailable defaults to 0, it violates this constraint because all pods needs to be\n          # available and no pods can be evicted voluntarily\n          max_unavailable := object.get(pdb.spec, "maxUnavailable", 1)\n          max_unavailable > 0\n        }\n\n')),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"pod-disruption-budget"),(0,i.kt)("blockquote",null,(0,i.kt)("details",null,(0,i.kt)("summary",null,"constraint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sPodDisruptionBudget\nmetadata:\n  name: pod-distruption-budget\nspec:\n  match:\n    kinds:\n      - apiGroups: ["apps"]\n        kinds: ["Deployment", "ReplicaSet", "StatefulSet"]\n      - apiGroups: ["policy"]\n        kinds: ["PodDisruptionBudget"]\n      - apiGroups: [""]\n        kinds: ["ReplicationController"]\n\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"example-allowed-pdb"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: nginx-pdb-allowed\n  namespace: default\nspec:\n  maxUnavailable: 1\n  selector:\n    matchLabels:\n      foo: bar\n\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"example-disallowed-pdb"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: nginx-pdb-disallowed\n  namespace: default\nspec:\n  maxUnavailable: 0\n  selector:\n    matchLabels:\n      foo: bar\n\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"example-allowed-min-available"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment-allowed-1\n  namespace: default\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n      example: allowed-deployment-1\n  template:\n    metadata:\n      labels:\n        app: nginx\n        example: allowed-deployment-1\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"example-allowed-max-unavailable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment-allowed-2\n  namespace: default\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n      example: allowed-deployment-2\n  template:\n    metadata:\n      labels:\n        app: nginx\n        example: allowed-deployment-2\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"example-disallowed-min-available"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment-disallowed\n  namespace: default\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n      example: disallowed-deployment\n  template:\n    metadata:\n      labels:\n        app: nginx\n        example: disallowed-deployment\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n\n"))))))}u.isMDXComponent=!0}}]);