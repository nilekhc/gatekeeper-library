"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6625],{3905:(e,a,s)=>{s.d(a,{Zo:()=>p,kt:()=>g});var n=s(7294);function t(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function l(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?l(Object(s),!0).forEach((function(a){t(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function o(e,a){if(null==e)return{};var s,n,t=function(e,a){if(null==e)return{};var s,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)s=l[n],a.indexOf(s)>=0||(t[s]=e[s]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)s=l[n],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}var i=n.createContext({}),c=function(e){var a=n.useContext(i),s=a;return e&&(s="function"==typeof e?e(a):r(r({},a),e)),s},p=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var s=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(s),g=t,d=u["".concat(i,".").concat(g)]||u[g]||m[g]||l;return s?n.createElement(d,r(r({ref:a},p),{},{components:s})):n.createElement(d,r({ref:a},p))}));function g(e,a){var s=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=s.length,r=new Array(l);r[0]=u;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:t,r[1]=o;for(var c=2;c<l;c++)r[c]=s[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,s)}u.displayName="MDXCreateElement"},7492:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=s(7462),t=(s(7294),s(3905));const l={id:"storageclass",title:"Storage Class"},r="Storage Class",o={unversionedId:"storageclass",id:"storageclass",title:"Storage Class",description:"Description",source:"@site/docs/storageclass.md",sourceDirName:".",slug:"/storageclass",permalink:"/gatekeeper-library/storageclass",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/storageclass.md",tags:[],version:"current",frontMatter:{id:"storageclass",title:"Storage Class"},sidebar:"docs",previous:{title:"Required Probes",permalink:"/gatekeeper-library/requiredprobes"},next:{title:"Unique Ingress Host",permalink:"/gatekeeper-library/uniqueingresshost"}},i={},c=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],p={toc:c};function m(e){let{components:a,...s}=e;return(0,t.kt)("wrapper",(0,n.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"storage-class"},"Storage Class"),(0,t.kt)("h2",{id:"description"},"Description"),(0,t.kt)("p",null,"Requires storage classes to be specified when used. Only Gatekeeper 3.9+ is supported."),(0,t.kt)("h2",{id:"template"},"Template"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8sstorageclass\n  annotations:\n    metadata.gatekeeper.sh/title: "Storage Class"\n    metadata.gatekeeper.sh/version: 1.0.1\n    metadata.gatekeeper.sh/requiresSyncData: |\n      "[\n        [\n          {\n            "groups":["storage.k8s.io"],\n            "versions": ["v1"],\n            "kinds": ["StorageClass"]\n          }\n        ]\n      ]"\n    description: >-\n      Requires storage classes to be specified when used. Only Gatekeeper 3.9+ is supported.\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sStorageClass\n      validation:\n        openAPIV3Schema:\n          type: object\n          description: >-\n            Requires storage classes to be specified when used.\n          properties:\n            includeStorageClassesInMessage:\n              type: boolean\n              default: true\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8sstorageclass\n\n        is_pvc(obj) {\n          obj.apiVersion == "v1"\n          obj.kind == "PersistentVolumeClaim"\n        }\n\n        is_statefulset(obj) {\n          obj.apiVersion == "apps/v1"\n          obj.kind == "StatefulSet"\n        }\n\n        violation[{"msg": msg}] {\n          not data.inventory.cluster["storage.k8s.io/v1"]["StorageClass"]\n          msg := sprintf("StorageClasses not synced. Gatekeeper may be misconfigured. Please have a cluster-admin consult the documentation.", [])\n        }\n\n        storageclass_found(name) {\n          data.inventory.cluster["storage.k8s.io/v1"]["StorageClass"][name]\n        }\n\n        violation[{"msg": pvc_storageclass_badname_msg}] {\n          is_pvc(input.review.object)\n          not storageclass_found(input.review.object.spec.storageClassName)\n        }\n        pvc_storageclass_badname_msg := sprintf("pvc did not specify a valid storage class name <%v>. Must be one of [%v]", args) {\n          input.parameters.includeStorageClassesInMessage\n          args := [\n            input.review.object.spec.storageClassName,\n            concat(", ", [n | data.inventory.cluster["storage.k8s.io/v1"]["StorageClass"][n]])\n          ]\n        } else := sprintf(\n          "pvc did not specify a valid storage class name <%v>.",\n          [input.review.object.spec.storageClassName]\n        )\n\n        violation[{"msg": pvc_storageclass_noname_msg}] {\n          is_pvc(input.review.object)\n          not input.review.object.spec.storageClassName\n        }\n        pvc_storageclass_noname_msg := sprintf("pvc did not specify a storage class name. Must be one of [%v]", args) {\n          input.parameters.includeStorageClassesInMessage\n          args := [\n            concat(", ", [n | data.inventory.cluster["storage.k8s.io/v1"]["StorageClass"][n]])\n          ]\n        } else := sprintf(\n          "pvc did not specify a storage class name.",\n          []\n        )\n\n        violation[{"msg": statefulset_vct_badname_msg(vct)}] {\n          is_statefulset(input.review.object)\n          vct := input.review.object.spec.volumeClaimTemplates[_]\n          not storageclass_found(vct.spec.storageClassName)\n        }\n        statefulset_vct_badname_msg(vct) := msg {\n          input.parameters.includeStorageClassesInMessage\n          msg := sprintf(\n              "statefulset did not specify a valid storage class name <%v>. Must be one of [%v]", [\n              vct.spec.storageClassName,\n              concat(", ", [n | data.inventory.cluster["storage.k8s.io/v1"]["StorageClass"][n]])\n          ])\n        }\n        statefulset_vct_badname_msg(vct) := msg {\n          not input.parameters.includeStorageClassesInMessage\n          msg := sprintf(\n            "statefulset did not specify a valid storage class name <%v>.", [\n              vct.spec.storageClassName\n          ])\n        }\n\n        violation[{"msg": statefulset_vct_noname_msg}] {\n          is_statefulset(input.review.object)\n          vct := input.review.object.spec.volumeClaimTemplates[_]\n          not vct.spec.storageClassName\n        }\n        statefulset_vct_noname_msg := sprintf("statefulset did not specify a storage class name. Must be one of [%v]", args) {\n          input.parameters.includeStorageClassesInMessage\n          args := [\n            concat(", ", [n | data.inventory.cluster["storage.k8s.io/v1"]["StorageClass"][n]])\n          ]\n        } else := sprintf(\n          "statefulset did not specify a storage class name.",\n          []\n        )\n\n        #FIXME pod generic ephemeral might be good to validate some day too.\n\n')),(0,t.kt)("h3",{id:"usage"},"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/storageclass/template.yaml\n")),(0,t.kt)("h2",{id:"examples"},"Examples"),(0,t.kt)("details",null,(0,t.kt)("summary",null,"storageclass"),(0,t.kt)("blockquote",null,(0,t.kt)("details",null,(0,t.kt)("summary",null,"constraint"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sStorageClass\nmetadata:\n  name: storageclass\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["PersistentVolumeClaim"]\n      - apiGroups: ["apps"]\n        kinds: ["StatefulSet"]\n  parameters:\n    includeStorageClassesInMessage: true\n\n')),(0,t.kt)("p",null,"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/storageclass/samples/storageclass/constraint.yaml\n"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,"example-allowed-pvc"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: ok\nspec:\n  accessModes:\n    - ReadWriteOnce\n  volumeMode: Filesystem\n  resources:\n    requests:\n      storage: 8Gi\n  storageClassName: somestorageclass\n\n")),(0,t.kt)("p",null,"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/storageclass/samples/storageclass/example_allowed_pvc.yaml\n"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,"example-allowed-ss"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: volumeclaimstorageclass\nspec:\n  selector:\n    matchLabels:\n      app: volumeclaimstorageclass\n  serviceName: volumeclaimstorageclass\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: volumeclaimstorageclass\n    spec:\n      containers:\n      - name: main\n        image: k8s.gcr.io/nginx-slim:0.8\n        volumeMounts:\n        - name: data\n          mountPath: /usr/share/nginx/html\n  volumeClaimTemplates:\n  - metadata:\n      name: data\n    spec:\n      accessModes: ["ReadWriteOnce"]\n      storageClassName: "somestorageclass"\n      resources:\n        requests:\n          storage: 1Gi\n\n')),(0,t.kt)("p",null,"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/storageclass/samples/storageclass/example_allowed_ss.yaml\n"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,"example-disallowed-pvc-badname"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: badstorageclass\nspec:\n  accessModes:\n    - ReadWriteOnce\n  volumeMode: Filesystem\n  resources:\n    requests:\n      storage: 8Gi\n  storageClassName: badstorageclass\n\n")),(0,t.kt)("p",null,"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/storageclass/samples/storageclass/example_disallowed_pvc_badname.yaml\n"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,"example-disallowed-ssvct-badnamename"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: badvolumeclaimstorageclass\nspec:\n  selector:\n    matchLabels:\n      app: badvolumeclaimstorageclass\n  serviceName: badvolumeclaimstorageclass\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: badvolumeclaimstorageclass\n    spec:\n      containers:\n      - name: main\n        image: k8s.gcr.io/nginx-slim:0.8\n        volumeMounts:\n        - name: data\n          mountPath: /usr/share/nginx/html\n  volumeClaimTemplates:\n  - metadata:\n      name: data\n    spec:\n      accessModes: ["ReadWriteOnce"]\n      storageClassName: "badstorageclass"\n      resources:\n        requests:\n          storage: 1Gi\n\n')),(0,t.kt)("p",null,"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/storageclass/samples/storageclass/example_disallowed_ssvct_badnamename.yaml\n"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,"example-disallowed-pvc-nonamename"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: nostorageclass\nspec:\n  accessModes:\n    - ReadWriteOnce\n  volumeMode: Filesystem\n  resources:\n    requests:\n      storage: 8Gi\n\n")),(0,t.kt)("p",null,"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/storageclass/samples/storageclass/example_disallowed_pvc_nonamename.yaml\n"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,"example-disallowed-ssvct-nonamename"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: novolumeclaimstorageclass\nspec:\n  selector:\n    matchLabels:\n      app: novolumeclaimstorageclass\n  serviceName: novolumeclaimstorageclass\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: novolumeclaimstorageclass\n    spec:\n      containers:\n      - name: main\n        image: k8s.gcr.io/nginx-slim:0.8\n        volumeMounts:\n        - name: data\n          mountPath: /usr/share/nginx/html\n  volumeClaimTemplates:\n  - metadata:\n      name: data\n    spec:\n      accessModes: ["ReadWriteOnce"]\n      resources:\n        requests:\n          storage: 1Gi\n\n')),(0,t.kt)("p",null,"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/storageclass/samples/storageclass/example_disallowed_ssvct_nonamename.yaml\n"))))))}m.isMDXComponent=!0}}]);