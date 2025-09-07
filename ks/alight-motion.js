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
        "orderNumber": "⚠️快手：AM小秋 其余均为假冒 如您在其他地方购买了此配置那么说明您已被骗，您将无法享受售后且有停用风险 认准快手AM小秋⚠️会员成功解锁",
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
