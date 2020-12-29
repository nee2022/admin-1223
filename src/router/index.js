import Vue from "vue";
import Router from "vue-router";
import logIn from "../pages/logIn";
import summary from "../pages/summary";
// import map from '../pages/map'
import ito from "../pages/ito";
import code from "../components/code";
import fault from "../components/wulian/fault";
import offline from "../components/offline";
import on_line from "../components/on_line";
import all from "../components/all";
import centre from "../pages/centre";
import simall from "../components/wulian/all";
import online from "../components/wulian/online";
import off_line from "../components/wulian/off_line";
import shebe_online from "../components/wulian/shebe_online";
import shebie_offline from "../components/wulian/shebie_offline";
import bind from "../components/wulian/bind";
import unbound from "../components/wulian/unbound";
import news from "../components/centre/news";
import now from "../components/centre/now";
import carCharging from "../pages/carCharging";
import carAll from "../components/car/all";
import DC from "../components/car/DC";
import AC from "../components/car/AC";
import charge from "../components/car/charge";
import realTime from "../components/car/realTime";
import completed from "../components/car/completed";
import refund from "../components/car/refund";
import setMeal from "../components/car/setMeal";
import motorcycles from "../pages/motorcycles";
import motoAll from "../components/motorcycles/motoAll";
import motoOrder from "../components/motorcycles/motoOrder";
import motosetMeal from "../components/motorcycles/setMeal";
import mototaocan from "../components/motorcycles/mototaocan";
import meal from "../components/car/meal";
import cardMeal from "../components/car/cardMeal";
import motoQr from "../components/motorcycles/motoQr";
import motoRfid from "../components/motorcycles/motoRfid";
import motoReal from "../components/motorcycles/motoReal";
import motoHistory from "../components/motorcycles/motoHistory";
import motoRefund from "../components/motorcycles/motoRefund";
import equipment from "../components/motorcycles/equipment";
import union from "../components/union.vue";
import cartaocan from "../components/car/cartaocan.vue";
import merchantAsset from "../pages/merchantAsset/merchantAsset";
import merchantAccoutDetailPage from "../pages/merchantAccoutDetailPage/merchantAccoutDetailPage";
import financialManagement from "../pages/financialManagement/financialManagement";
import powerMonitorSystem from "../pages/powerMonitorSystem/powerMonitorSystem";

import smartSocket from "../pages/smartSocket/smartSocket";
import prepaidMeter from "../pages/prepaidMeter/prepaidMeter";
import departmentAndRoleManagement from "../pages/departmentAndRoleManagement/departmentAndRoleManagement";
import carBlac from "../components/zhandianAll/carBlac.vue";
import carsWhite from "../components/zhandianAll/carsWhite.vue";
import basic from "../components/zhandianAll/basic.vue";
import chargingRate from "../components/zhandianAll/chargingRate.vue";
import stopRate from "../components/zhandianAll/stopRate.vue";
import parkingRecords from "../components/zhandianAll/parkingRecords.vue";
import chargingRecord from "../components/zhandianAll/chargingRecord.vue";
import xiangqiMeal from "../components/zhandianAll/xiangqiMeal.vue";
import zhanTime from "../components/zhandianAll/zhanTime.vue";
import zhanhistory from "../components/zhandianAll/history.vue";
import chargersXi from "../pages/chargersXi";
import shebeiBasic from "../components/shebeiXinxi/shebeiBasic.vue";
import shebeimeal from "../components/shebeiXinxi/shebeimeal.vue";
import shebeiChargingRate from "../components/shebeiXinxi/shebeiChargingRate.vue";
import shebeiChargingRecord from "../components/shebeiXinxi/shebeiChargingRecord.vue";
import shebeiParkingRecords from "../components/shebeiXinxi/shebeiParkingRecords.vue";
import shebeiHistory from "../components/shebeiXinxi/shebeiHistory.vue";
import stations from "../pages/stations";

const HAS_LOGINED = true;

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: logIn
    },
    // {
    // 	path: '/map',
    // 	component: map
    // },
    {
      path: "/summary",
      component: summary
    },
    {
      path: "/summary/ito",
      component: ito
    },
    {
      path: "/merchantAsset/agent",
      component: merchantAsset
    },
    {
      path: "/merchantAccoutDetailPage/basicInformation",
      component: merchantAccoutDetailPage
    },
    {
      path: "/financialManagement/allOrder",
      component: financialManagement
    },

    {
      path: "/powerMonitorSystem/highVoltageRoom",
      component: powerMonitorSystem
    },
    {
      path: "/smartSocket/site",
      component: smartSocket
    },
    {
      path: "/prepaidMeter/site",
      component: prepaidMeter
    },
    {
      path: "/departmentAndRoleManagement/departmentManagement",
      component: departmentAndRoleManagement
    },

    // { path: "/orderForm/allOrder", component: financialManagement },
    {
      path: "/System",
      name: "System",
      component: () => import("../pages/System.vue"),
      children: [
        {
          path: "/Logging",
          name: "Logging",
          component: () => import("../pages/SystemChild/Logging.vue")
        },

        {
          path: "/userLog",
          name: "userLog",
          component: () => import("../pages/SystemChild/userLog.vue")
        },
        {
          path: "/deviceEvents",
          name: "deviceEvents",
          component: () => import("../pages/SystemChild/deviceEvents.vue")
        },
        {
          path: "/nodeEvents",
          name: "nodeEvents",
          component: () => import("../pages/SystemChild/nodeEvents.vue")
        },
        {
          path: "/carWhite",
          name: "carWhite",
          component: () => import("../pages/SystemChild/carWhite.vue")
        },
        {
          path: "/carBlack",
          name: "carBlack",
          component: () => import("../pages/SystemChild/carBlack.vue")
        },
        {
          path: "/serverEvents",
          name: "serverEvents",
          component: () => import("../pages/SystemChild/serverEvents.vue")
        },
        {
          path: "/nodeYvjing",
          name: "nodeYvjing",
          component: () => import("../pages/SystemChild/nodeYvjing.vue")
        },
        {
          path: "/serverYvjing",
          name: "serverYvjing",
          component: () => import("../pages/SystemChild/serverYvjing.vue")
        },
        {
          path: "/deviceYvjing",
          name: "deviceYvjing",
          component: () => import("../pages/SystemChild/deviceYvjing.vue")
        }
      ],
      redirect: "/Logging"
    },
    {
      path: "/Promotional",
      name: "Promotional",
      component: () => import("../pages/Promotional.vue"),
      children: [
        {
          path: "/Pcoupon",
          name: "Pcoupon",
          component: () => import("../pages/PromotionalChild/Pcoupon.vue")
        },
        {
          path: "/Pyouxiaocoupon",
          name: "Pyouxiaocoupon",
          component: () =>
            import("../pages/PromotionalChild/Pyouxiaocoupon.vue")
        },
        {
          path: "/userTaocan",
          name: "userTaocan",
          component: () => import("../pages/PromotionalChild/userTaocan.vue")
        },
        {
          path: "/keyongTaocan",
          name: "keyongTaocan",
          component: () => import("../pages/PromotionalChild/keyongTaocan.vue")
        },
        {
          path: "/daixufeiTaocan",
          name: "daixufeiTaocan",
          component: () =>
            import("../pages/PromotionalChild/daixufeiTaocan.vue")
        },
        {
          path: "/Pyiyongcoupon",
          name: "Pyiyongcoupon",
          component: () => import("../pages/PromotionalChild/Pyiyongcoupon.vue")
        },
        {
          path: "/Pguoqicoupon",
          name: "Pguoqicoupon",
          component: () => import("../pages/PromotionalChild/Pguoqicoupon.vue")
        },
        {
          path: "/CouponActivity",
          name: "CouponActivity",
          component: () =>
            import("../pages/PromotionalChild/CouponActivity.vue")
        },
        {
          path: "/chongzhi",
          name: "chongzhi",
          component: () => import("../pages/PromotionalChild/chongzhi.vue")
        },
        {
          path: "/baoyuetaocan",
          name: "baoyuetaocan",
          component: () => import("../pages/PromotionalChild/baoyuetaocan.vue")
        },
        {
          path: "/czjilu",
          name: "czjilu",
          component: () => import("../pages/PromotionalChild/czjilu.vue")
        }
      ],
      redirect: "/chongzhi"
    },
    {
      path: "/parkingLot",
      name: "parkingLot",
      component: () => import("../pages/parkingLot.vue"),
      children: [
        {
          path: "/parkingChang",
          name: "parkingChang",
          component: () => import("../pages/Pchild/parkingChang.vue")
        },
        {
          path: "/AllparkCar",
          name: "AllparkCar",
          component: () => import("../pages/Pchild/AllparkCar.vue")
        },
        {
          path: "/Pbaoyue",
          name: "Pbaoyue",
          component: () => import("../pages/Pchild/Pbaoyue.vue")
        },
        {
          path: "/shishiParkCar",
          name: "shishiParkCar",
          component: () => import("../pages/Pchild/shishiParkCar.vue")
        },
        {
          path: "/qianfeiParkCar",
          name: "qianfeiParkCar",
          component: () => import("../pages/Pchild/qianfeiParkCar.vue")
        },
        {
          path: "/hisParkCar",
          name: "hisParkCar",
          component: () => import("../pages/Pchild/hisParkCar.vue")
        },
        {
          path: "/yichangParkCar",
          name: "yichangParkCar",
          component: () => import("../pages/Pchild/yichangParkCar.vue")
        },
        {
          path: "/Insensitivee",
          name: "Insensitivee",
          component: () => import("../pages/Pchild/Insensitivee.vue")
        },
        {
          path: "/jifeiguize",
          name: "jifeiguize",
          component: () => import("../pages/Pchild/jifeiguize.vue")
        }
      ],
      redirect: "/parkingChang"
    },
    {
      path: "/wisdomParking",
      name: "wisdomParking",
      component: () => import("../pages/wisdomParking.vue"),
      children: [
        {
          path: "/road",
          name: "road",
          component: () => import("../pages/parksChild/road.vue")
        },
        {
          path: "/viewLow",
          name: "viewLow",
          component: () => import("../pages/parksChild/viewLow.vue")
        },
        {
          path: "/view",
          name: "view",
          component: () => import("../pages/parksChild/view.vue")
        },
        {
          path: "/pos",
          name: "pos",
          component: () => import("../pages/parksChild/pos.vue")
        },
        {
          path: "/baoyue",
          name: "baoyue",
          component: () => import("../pages/parksChild/baoyue.vue")
        },
        {
          path: "/xunjianCar",
          name: "xunjianCar",
          component: () => import("../pages/parksChild/xunjianCar.vue")
        },
        {
          path: "/parkCar",
          name: "parkCar",
          component: () => import("../pages/parksChild/parkCar.vue")
        },
        {
          path: "/parking",
          name: "parking",
          component: () => import("../pages/parksChild/parking.vue")
        },
        {
          path: "/taocan",
          name: "taocan",
          component: () => import("../pages/parksChild/taocan.vue")
        },
        {
          path: "/hisPark",
          name: "hisPark",
          component: () => import("../pages/parksChild/hisPark.vue")
        },
        {
          path: "/qianfei",
          name: "qianfei",
          component: () => import("../pages/parksChild/qianfei.vue")
        },
        {
          path: "/yichang",
          name: "yichang",
          component: () => import("../pages/parksChild/yichang.vue")
        },
        {
          path: "/Insensitive",
          name: "Insensitive",
          component: () => import("../pages/parksChild/Insensitive.vue")
        },
        {
          path: "/jifeiguizes",
          name: "jifeiguizes",
          component: () => import("../pages/parksChild/jifeiguizes.vue")
        },
        {
          path: "/jiaofei",
          name: "jiaofei",
          component: () => import("../pages/parksChild/jiaofei.vue")
        },
        {
          path: "/paiban",
          name: "paiban",
          component: () => import("../pages/parksChild/paiban.vue")
        }
      ],
      redirect: "/road"
    },
    //用户资产
    {
      path: "/UserAssets",
      name: "UserAssets",
      component: () => import("../pages/UserAssets.vue"),
      children: [
        {
          path: "/usersNum",
          name: "usersNum",
          component: () => import("../pages/UserAssetsChild/usersNum.vue")
        },
        {
          path: "/oneCard",
          name: "oneCard",
          component: () => import("../pages/UserAssetsChild/oneCard.vue")
        },
        {
          path: "/coupon",
          name: "coupon",
          component: () => import("../pages/UserAssetsChild/coupon.vue") //优惠券
        },
        {
          path: "/UserPackages",
          name: "UserPackages",
          component: () => import("../pages/UserAssetsChild/UserPackages.vue") //用户套餐
        },
        {
          path: "/realName",
          name: "realName",
          component: () => import("../pages/UserAssetsChild/realName.vue") //实名认证
        },
        {
          path: "/car",
          name: "/car",
          component: () => import("../pages/UserAssetsChild//car.vue") //车辆认证
        },
        {
          path: "/Insensitives",
          name: "Insensitives",
          component: () => import("../pages/UserAssetsChild/Insensitives.vue") //无感支付
        },
        {
          path: "/phoneUsers",
          name: "phoneUsers",
          component: () => import("../pages/UserAssetsChild/phoneUsers.vue") //手机用户
        },
        {
          path: "/wechatUsers",
          name: "wechatUsers",
          component: () => import("../pages/UserAssetsChild/wechatUsers.vue") //微信用户
        },
        {
          path: "/ailpayUsers",
          name: "ailpayUsers",
          component: () => import("../pages/UserAssetsChild/ailpayUsers.vue") //支付宝用户
        },
        {
          path: "/storedValue",
          name: "storedValue",
          component: () => import("../pages/UserAssetsChild/storedValue.vue") //储值卡
        },
        {
          path: "/youxiaoCoupon",
          name: "youxiaoCoupon",
          component: () => import("../pages/UserAssetsChild/youxiaoCoupon.vue") //有效优惠券
        },
        {
          path: "/guoqiCoupon",
          name: "guoqiCoupon",
          component: () => import("../pages/UserAssetsChild/guoqiCoupon.vue") //过期优惠券
        },
        {
          path: "/yiyongCoupon",
          name: "yiyongCoupon",
          component: () => import("../pages/UserAssetsChild/yiyongCoupon.vue") //已用优惠券
        },
        {
          path: "/keyongPackages",
          name: "keyongPackages",
          component: () => import("../pages/UserAssetsChild/keyongPackages.vue") //可用套餐
        },
        {
          path: "/daichongzhi",
          name: "daichongzhi",
          component: () => import("../pages/UserAssetsChild/daichongzhi.vue") //待充值
        },
        {
          path: "/auditing",
          name: "auditing",
          component: () => import("../pages/UserAssetsChild/auditing.vue") //车辆认证审核中
        },
        {
          path: "/audited",
          name: "audited",
          component: () => import("../pages/UserAssetsChild/audited.vue") //车辆认证审核通过
        },
        {
          path: "/auditFalse",
          name: "auditFalse",
          component: () => import("../pages/UserAssetsChild/auditFalse.vue") //车辆认证审核失败
        },
        {
          path: "/jianquanCard",
          name: "jianquanCard",
          component: () => import("../pages/UserAssetsChild/jianquanCard.vue") //车辆认证审核失败
        },
        {
          path: "/netCard",
          name: "netCard",
          component: () => import("../pages/UserAssetsChild/netCard.vue") //车辆认证审核失败
        },
        {
          path: "/offCard",
          name: "offCard",
          component: () => import("../pages/UserAssetsChild/offCard.vue") //车辆认证审核失败
        },
        {
          path: "/naming",
          name: "naming",
          component: () => import("../pages/UserAssetsChild/naming.vue") //车辆认证审核失败
        },
        {
          path: "/named",
          name: "named",
          component: () => import("../pages/UserAssetsChild/named.vue") //车辆认证审核失败
        },
        {
          path: "/nameFalse",
          name: "nameFalse",
          component: () => import("../pages/UserAssetsChild/nameFalse.vue") //车辆认证审核失败
        },
        {
          path: "/pay",
          name: "pay",
          component: () => import("../pages/UserAssetsChild/pay.vue") //车辆认证审核失败
        },
        {
          path: "/wechatpay",
          name: "wechatpay",
          component: () => import("../pages/UserAssetsChild/wechatpay.vue") //车辆认证审核失败
        },
        {
          path: "/ailpay",
          name: "ailpay",
          component: () => import("../pages/UserAssetsChild/ailpay.vue") //车辆认证审核失败
        }
      ],
      redirect: "/usersNum"
    },
    //电单车充电
    {
      path: "/summary/motorcycles",
      component: motorcycles,
      children: [
        {
          path: "/motoAll",
          component: motoAll
        },
        {
          path: "/motoHistory",
          component: motoHistory
        },
        {
          path: "/equipment",
          component: equipment
        },
        {
          path: "/motoRefund",
          component: motoRefund
        },
        {
          path: "/motoQr",
          component: motoQr
        },
        {
          path: "/motoReal",
          component: motoReal
        },
        {
          path: "/motoRfid",
          component: motoRfid
        },
        {
          path: "/motoOrder",
          component: motoOrder
        },
        {
          path: "/mototaocan",
          component: mototaocan
        },
        {
          path: "/motosetMeal",
          component: motosetMeal
        }
      ],
      redirect: "motoAll"
    },
    //汽车充电
    {
      path: "/summary/carCharging",
      component: carCharging,
      children: [
        {
          path: "/carAll",
          component: carAll
        },
        {
          path: "/realTime",
          component: realTime
        },
        {
          path: "/cartaocan",
          component: cartaocan
        },
        {
          path: "/cardMeal",
          component: cardMeal
        },
        {
          path: "/meal",
          component: meal
        },
        {
          path: "/refund",
          component: refund
        },
        {
          path: "/setMeal",
          component: setMeal
        },
        {
          path: "/completed",
          component: completed
        },
        {
          path: "/DC",
          component: DC
        },
        {
          path: "/AC",
          component: AC
        },
        {
          path: "/charge",
          component: charge
        }
      ],
      redirect: "carAll"
    },
    //物联设备
    {
      path: "/summary/ito",
      component: ito,
      children: [
        {
          path: "/union",
          component: union
        },
        {
          path: "/bind",
          component: bind
        },

        {
          path: "/unbound",
          component: unbound
        },
        {
          path: "/simall",
          component: simall
        },
        {
          path: "/online",
          component: online
        },
        {
          path: "/shebie_offline",
          component: shebie_offline
        },
        {
          path: "/off_line",
          component: off_line
        },
        {
          path: "/shebe_online",
          component: shebe_online
        },
        {
          path: "/code",
          component: code
        },
        {
          path: "/fault",
          component: fault
        },
        {
          path: "/offline",
          component: offline
        },
        {
          path: "/on_line",
          component: on_line
        },
        {
          path: "/all",
          component: all
        }
      ],
      redirect: "union"
    },

    {
      path: "/chargersXi",
      component: chargersXi,
      children: [
        {
          path: "/shebeiBasic",
          component: shebeiBasic
        },
        {
          path: "/shebeiHistory",
          component: shebeiHistory
        },
        {
          path: "/shebeimeal",
          component: shebeimeal
        },
        {
          path: "/shebeiChargingRate",
          component: shebeiChargingRate
        },
        {
          path: "/shebeiChargingRecord",
          component: shebeiChargingRecord
        },
        {
          path: "/shebeiParkingRecords",
          component: shebeiParkingRecords
        }
      ],
      redirect: "/shebeiBasic"
    },
    {
      path: "/stations",
      component: stations,
      children: [
        {
          path: "/carBlac",
          component: carBlac
        },
        {
          path: "/zhanTime",
          component: zhanTime
        },
        {
          path: "/zhanhistory",
          component: zhanhistory
        },
        {
          path: "/carsWhite",
          component: carsWhite
        },
        {
          path: "/basic",
          component: basic
        },
        {
          path: "/chargingRate",
          component: chargingRate
        },
        {
          path: "/stopRate",
          component: stopRate
        },
        {
          path: "/parkingRecords",
          component: parkingRecords
        },
        {
          path: "/chargingRecord",
          component: chargingRecord
        },
        {
          path: "/xiangqiMeal",
          component: xiangqiMeal
        }
      ],
      redirect: "/basic"
    },

    //个人中心
    {
      path: "/centre",
      component: centre,
      children: [
        {
          path: "/",
          component: now
        },
        {
          path: "/centre/news",
          component: news
        }
      ]
    },
    {
      path: "/MembershipDetails",
      name: "MembershipDetails",
      component: () => import("../pages/MembershipDetails.vue"),
      children: [
        {
          path: "/essentialInformation",
          name: "essentialInformation",
          component: () =>
            import("../pages/MembershipDetailsChild/essentialInformation.vue")
        },
        {
          path: "/userCar",
          name: "userCar",
          component: () => import("../pages/MembershipDetailsChild/userCar.vue")
        },
        {
          path: "/userCard",
          name: "userCard",
          component: () =>
            import("../pages/MembershipDetailsChild/userCard.vue")
        },
        {
          path: "/userTaocans",
          name: "userTaocans",
          component: () =>
            import("../pages/MembershipDetailsChild/userTaocans.vue")
        },
        {
          path: "/invoiceAll",
          name: "invoiceAll",
          component: () =>
            import("../pages/MembershipDetailsChild/invoiceAll.vue")
        },
        {
          path: "/userBill",
          name: "userBill",
          component: () =>
            import("../pages/MembershipDetailsChild/userBill.vue")
        },
        {
          path: "/userCoupon",
          name: "userCoupon",
          component: () =>
            import("../pages/MembershipDetailsChild/userCoupon.vue")
        },
        {
          path: "/invoiced",
          name: "invoiced",
          component: () =>
            import("../pages/MembershipDetailsChild/invoiced.vue")
        },
        {
          path: "/invoicing",
          name: "invoicing",
          component: () =>
            import("../pages/MembershipDetailsChild/invoicing.vue")
        },
        {
          path: "/stopOrderAll",
          name: "stopOrderAll",
          component: () =>
            import("../pages/MembershipDetailsChild/stopOrderAll.vue")
        },
        {
          path: "/stopOrderHistroy",
          name: "stopOrderHistroy",
          component: () =>
            import("../pages/MembershipDetailsChild/stopOrderHistroy.vue")
        },
        {
          path: "/userChongzhi",
          name: "userChongzhi",
          component: () =>
            import("../pages/MembershipDetailsChild/userChongzhi.vue")
        },
        {
          path: "/userTuikuan",
          name: "userTuikuan",
          component: () =>
            import("../pages/MembershipDetailsChild/userTuikuan.vue")
        },
        {
          path: "/userXiaofei",
          name: "userXiaofei",
          component: () =>
            import("../pages/MembershipDetailsChild/userXiaofei.vue")
        },
        {
          path: "/stopOrderParking",
          name: "stopOrderParking",
          component: () =>
            import("../pages/MembershipDetailsChild/stopOrderParking.vue")
        }
      ],
      redirect: "essentialInformation"
    },
    {
      path: "/oneCardDetails",
      name: "oneCardDetails",
      component: () => import("../pages/oneCardDetails.vue"),
      children: [
        {
          path: "/oneCardjiben",
          name: "oneCardjiben",
          component: () =>
            import("../pages/oneCardDetailsChild/oneCardjiben.vue")
        },
        {
          path: "/oneCardjiben",
          name: "oneCardjiben",
          component: () =>
            import("../pages/oneCardDetailsChild/oneCardjiben.vue")
        },
        {
          path: "/oneCardjiben",
          name: "oneCardjiben",
          component: () =>
            import("../pages/oneCardDetailsChild/oneCardjiben.vue")
        }
      ]
    },
    {
      path: "*",
      component: summary
    }
  ]
});
