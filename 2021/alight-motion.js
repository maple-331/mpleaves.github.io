var objc = JSON.parse($response.body);

objc = {
  "result": {
    "result": "success",
    "msTime": 2009216800128,
    "accountCreatedMillis": null,
    "licenses": [
      {
        "benefits": [
          "RemoveWatermark",
          "MemberEffects",
          "ProjectPackageSharing",
          "FutureMemberFeatures",
          "AdvancedEasing",
          "CameraObjects",
          "LayerParenting",
          "CloudStorageLowTier"
        ],
        "type": "subscription",
        "store": "apple_app_store",
        "autoRenewing": true,
        "orderNumber": "AMxqyyds",
        "productId": "alightcreative.motion.1y_t60_1w",
        "period": "1y",
        "label": null,
        "details": null,
        "expires": 1740926942000,
        "valid": true,
        "linkStatus": "linked-current"
      }
    ],
    "warnings": []
  }
}


$done({ body: JSON.stringify(objc) });
