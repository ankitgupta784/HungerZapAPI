const express = require("express");
const cors = require("cors");

const app = express();

var resList = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    pageOffset: {
      nextOffset: "CJhlELQ4KICIpKLItbK6UDCnEzgB",
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_PB_Theme: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
    },
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "What's on your mind?",
              headerStyling: {
                padding: {
                  left: 16,
                  top: 16,
                  bottom: 4,
                },
              },
            },
            layout: {
              rows: 1,
              columns: 10,
              horizontalScrollEnabled: true,
              itemSpacing: 24,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 8,
                  top: 8,
                  right: 12,
                  bottom: 4,
                },
              },
              scrollBar: {},
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#FFFFFF",
                  theme: "THEME_TYPE_LIGHT",
                },
                darkMode: {
                  theme: "THEME_TYPE_DARK",
                },
              },
            },
            imageGridCards: {
              info: [
                {
                  id: "750131",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                    text: "Dosa",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for dosa",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750643",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                    text: "Idli",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for idly",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750201",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
                    text: "Paratha",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for paratha",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750591",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                    text: "Biryani",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for biryani",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750234",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80377?collection_id=80377&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                    text: "Poori",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for poori",
                    altTextCta: "open",
                  },
                  entityId: "80377",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "749786",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Omelette.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80467?collection_id=80467&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
                    text: "Omelette",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for omelette",
                    altTextCta: "open",
                  },
                  entityId: "80467",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750561",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Vada.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                    text: "Vada",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for vada",
                    altTextCta: "open",
                  },
                  entityId: "80425",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "749868",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                    text: "Cakes",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for cake",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750197",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pancakes.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80471?collection_id=80471&tags=layout_BAU_Contextual%2Cpancake&type=rcv2",
                    text: "Pancakes",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for pancake",
                    altTextCta: "open",
                  },
                  entityId: "80471",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "749876",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
                    text: "Chole Bhature",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for chhole bhatoore",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750242",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Puttu.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80384?collection_id=80384&tags=layout_BAU_Contextual%2Cputtu&type=rcv2",
                    text: "Puttu",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for puttu",
                    altTextCta: "open",
                  },
                  entityId: "80384",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750598",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83907?collection_id=83907&tags=layout_CCS_Coffee&type=rcv2",
                    text: "Coffee",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for coffee",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83907&tags=layout_CCS_Coffee",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "749816",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Bath.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80354?collection_id=80354&tags=layout_BAU_Contextual%2Cbath%2Clayout_ux4&type=rcv2",
                    text: "Bath",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for bath",
                    altTextCta: "open",
                  },
                  entityId: "80354",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750232",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pongal.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80375?collection_id=80375&tags=layout_BAU_Contextual%2Cpongal&type=rcv2",
                    text: "Pongal",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for pongal",
                    altTextCta: "open",
                  },
                  entityId: "80375",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750199",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paniyaram.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80473?collection_id=80473&tags=layout_ux4&type=rcv2",
                    text: "Paniyaram",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for paniyaram",
                    altTextCta: "open",
                  },
                  entityId: "80473",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750225",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                    text: "Salad",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for salad",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750554",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Uttapam.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80415?collection_id=80415&tags=layout_CCS_Uthappam&type=rcv2",
                    text: "Uthappam",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for uttappam",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80415&tags=layout_CCS_Uthappam",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750604",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80493?collection_id=80493&tags=layout_CCS_Tea&type=rcv2",
                    text: "Tea",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for tea",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80493&tags=layout_CCS_Tea",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750204",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Parotta.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80477?collection_id=80477&tags=layout_BAU_Contextual%2Cparotta&type=rcv2",
                    text: "Parotta",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for parotta",
                    altTextCta: "open",
                  },
                  entityId: "80477",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
                {
                  id: "750571",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
                    text: "Pure Veg",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for veg",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
                  frequencyCapping: {},
                  externalMarketing: {},
                },
              ],
              style: {
                width: {
                  type: "TYPE_RELATIVE",
                  value: 0.2941,
                  reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                },
                height: {
                  type: "TYPE_RELATIVE",
                  value: 1.2444,
                  reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                },
              },
            },
            id: "whats_on_your_mind",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                info: [
                  {
                    id: "750131",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                      text: "Dosa",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for dosa",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750643",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                      text: "Idli",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for idly",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750201",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
                      text: "Paratha",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for paratha",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750591",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                      text: "Biryani",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for biryani",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750234",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80377?collection_id=80377&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                      text: "Poori",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for poori",
                      altTextCta: "open",
                    },
                    entityId: "80377",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "749786",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Omelette.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80467?collection_id=80467&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
                      text: "Omelette",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for omelette",
                      altTextCta: "open",
                    },
                    entityId: "80467",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750561",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Vada.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                      text: "Vada",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for vada",
                      altTextCta: "open",
                    },
                    entityId: "80425",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "749868",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                      text: "Cakes",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for cake",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750197",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pancakes.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80471?collection_id=80471&tags=layout_BAU_Contextual%2Cpancake&type=rcv2",
                      text: "Pancakes",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for pancake",
                      altTextCta: "open",
                    },
                    entityId: "80471",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "749876",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
                      text: "Chole Bhature",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for chhole bhatoore",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750242",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Puttu.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80384?collection_id=80384&tags=layout_BAU_Contextual%2Cputtu&type=rcv2",
                      text: "Puttu",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for puttu",
                      altTextCta: "open",
                    },
                    entityId: "80384",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750598",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83907?collection_id=83907&tags=layout_CCS_Coffee&type=rcv2",
                      text: "Coffee",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for coffee",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83907&tags=layout_CCS_Coffee",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "749816",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Bath.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80354?collection_id=80354&tags=layout_BAU_Contextual%2Cbath%2Clayout_ux4&type=rcv2",
                      text: "Bath",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for bath",
                      altTextCta: "open",
                    },
                    entityId: "80354",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750232",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pongal.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80375?collection_id=80375&tags=layout_BAU_Contextual%2Cpongal&type=rcv2",
                      text: "Pongal",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for pongal",
                      altTextCta: "open",
                    },
                    entityId: "80375",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750199",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paniyaram.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80473?collection_id=80473&tags=layout_ux4&type=rcv2",
                      text: "Paniyaram",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for paniyaram",
                      altTextCta: "open",
                    },
                    entityId: "80473",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750225",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                      text: "Salad",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for salad",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750554",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Uttapam.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80415?collection_id=80415&tags=layout_CCS_Uthappam&type=rcv2",
                      text: "Uthappam",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for uttappam",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80415&tags=layout_CCS_Uthappam",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750604",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80493?collection_id=80493&tags=layout_CCS_Tea&type=rcv2",
                      text: "Tea",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for tea",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80493&tags=layout_CCS_Tea",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750204",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Parotta.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80477?collection_id=80477&tags=layout_BAU_Contextual%2Cparotta&type=rcv2",
                      text: "Parotta",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for parotta",
                      altTextCta: "open",
                    },
                    entityId: "80477",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                  {
                    id: "750571",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
                      text: "Pure Veg",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for veg",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
                    frequencyCapping: {},
                    externalMarketing: {},
                  },
                ],
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.2941,
                    reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 1.2444,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                },
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "Top restaurant chains in Bangalore",
              action: {},
              headerStyling: {
                padding: {
                  left: 16,
                  top: 28,
                  bottom: 18,
                },
              },
            },
            layout: {
              rows: 1,
              columns: 20,
              horizontalScrollEnabled: true,
              itemSpacing: 32,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 16,
                  right: 12,
                  bottom: 12,
                },
              },
              scrollBar: {
                scrollThumbColor: "#E46D47",
                scrollTrackColor: "#02060C",
                width: 54,
                height: 4,
                scrollStyling: {
                  padding: {
                    top: 6,
                    bottom: 24,
                  },
                },
              },
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
                darkMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
              },
            },
            id: "top_brands_for_you",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "241027",
                      name: "Namaste",
                      cloudinaryImageId: "dtcwa1rxdskp3crqvpr3",
                      locality: "3rd Sector",
                      areaName: "Hsr Layout",
                      costForTwo: "₹100 for two",
                      cuisines: ["South Indian", "Chinese", "Thalis"],
                      avgRating: 4.4,
                      veg: true,
                      parentId: "366271",
                      avgRatingString: "4.4",
                      totalRatingsString: "28K+",
                      sla: {
                        deliveryTime: 30,
                        lastMileTravel: 4.5,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "4.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 01:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/namaste-3rd-sector-hsr-layout-rest241027",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "263485",
                      name: "Chaayos Chai+Snacks=Relax",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_263485.JPG",
                      locality: "Kormangala 8th Block",
                      areaName: "Kormangala",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets",
                      ],
                      avgRating: 4.5,
                      parentId: "281782",
                      avgRatingString: "4.5",
                      totalRatingsString: "4.5K+",
                      sla: {
                        deliveryTime: 20,
                        lastMileTravel: 1,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                            description: "bolt!",
                          },
                          {
                            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId:
                                    "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹199",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-8th-block-kormangala-rest263485",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "581495",
                      name: "Cheesecakes By CakeZone",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/13/cff2facf-8f58-411f-8ea9-fce8476a7dae_581495.JPG",
                      locality: "KORAMANGLA",
                      areaName: "KORAMANGLA 6th Block",
                      costForTwo: "₹200 for two",
                      cuisines: ["Desserts", "Bakery"],
                      avgRating: 4.6,
                      veg: true,
                      parentId: "348057",
                      avgRatingString: "4.6",
                      totalRatingsString: "100",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 0.6,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "0.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/cheesecakes-by-cakezone-koramangla-koramangla-6th-block-rest581495",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "255801",
                      name: "Great Indian Khichdi by EatFit",
                      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
                      locality: "6th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Home Food",
                        "Indian",
                        "North Indian",
                        "Healthy Food",
                        "Snacks",
                        "Desserts",
                        "Rajasthani",
                        "South Indian",
                        "Maharashtrian",
                        "Sweets",
                      ],
                      avgRating: 4.5,
                      veg: true,
                      parentId: "319582",
                      avgRatingString: "4.5",
                      totalRatingsString: "4.1K+",
                      sla: {
                        deliveryTime: 15,
                        lastMileTravel: 0.6,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "0.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId:
                              "Green%20Dot%20Awards/Best%20In%20Vegan.png",
                            description: "Delivery!",
                          },
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId:
                                    "Green%20Dot%20Awards/Best%20In%20Vegan.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/great-indian-khichdi-by-eatfit-6th-block-koramangala-rest255801",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "70012",
                      name: "SMOOR",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/11/01f3dd59-1d63-4f0b-a037-dcbef2b90c09_70012.jpg",
                      locality: "7th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹450 for two",
                      cuisines: [
                        "Asian",
                        "Burgers",
                        "Italian",
                        "Thai",
                        "Sushi",
                        "Salads",
                        "Pastas",
                        "Pizzas",
                        "Mexican",
                        "Chinese",
                      ],
                      avgRating: 4.6,
                      parentId: "3506",
                      avgRatingString: "4.6",
                      totalRatingsString: "8.2K+",
                      sla: {
                        deliveryTime: 22,
                        lastMileTravel: 1.9,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                            description: "bolt!",
                          },
                          {
                            imageId: "Rxawards/_CATEGORY-Desserts.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/smoor-7th-block-koramangala-rest70012",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "711368",
                      name: "Salad Days",
                      cloudinaryImageId: "cfa1123ebf17413dc7d0a80c7361fab3",
                      locality: "BTM Layout",
                      areaName: "HSR",
                      costForTwo: "₹500 for two",
                      cuisines: ["Salads"],
                      avgRating: 4.6,
                      parentId: "796",
                      avgRatingString: "4.6",
                      totalRatingsString: "4.0K+",
                      sla: {
                        deliveryTime: 30,
                        lastMileTravel: 3.8,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "3.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-18 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/salad-days-btm-layout-hsr-rest711368",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "381854",
                      name: "ITC Sunfeast Baked Creations",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/13/0f4e17ed-e2d8-411c-91a9-188823193605_381854.jpg",
                      locality: "Koramangala",
                      areaName: "Koramangala",
                      costForTwo: "₹600 for two",
                      cuisines: [
                        "Bakery",
                        "Desserts",
                        "Continental",
                        "Cafe",
                        "Snacks",
                        "Cakes",
                      ],
                      avgRating: 4.6,
                      parentId: "12285",
                      avgRatingString: "4.6",
                      totalRatingsString: "1.1K+",
                      sla: {
                        deliveryTime: 24,
                        lastMileTravel: 1.4,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                            description: "bolt!",
                          },
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "3.3",
                          ratingCount: "33",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/itc-sunfeast-baked-creations-koramangala-rest381854",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "107443",
                      name: "Lo! - Low Carb and Keto Foods",
                      cloudinaryImageId: "o8t0w5gdlujpigauaflw",
                      locality: "HSR Layout",
                      areaName: "HSR",
                      costForTwo: "₹150 for two",
                      cuisines: ["Healthy Food", "Keto", "Continental"],
                      avgRating: 4.4,
                      parentId: "8282",
                      avgRatingString: "4.4",
                      totalRatingsString: "7.3K+",
                      sla: {
                        deliveryTime: 27,
                        lastMileTravel: 3.6,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "3.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 01:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/lo-low-carb-and-keto-foods-layout-hsr-rest107443",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "288678",
                      name: "Home Plate by EatFit",
                      cloudinaryImageId: "1d578bb732e03c6f591790eb7d2d88e2",
                      locality: "6th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "North Indian",
                        "Home Food",
                        "Healthy Food",
                        "Indian",
                        "Punjabi",
                        "South Indian",
                        "Rajasthani",
                        "Maharashtrian",
                        "Snacks",
                        "Desserts",
                      ],
                      avgRating: 4.4,
                      parentId: "301197",
                      avgRatingString: "4.4",
                      totalRatingsString: "1.7K+",
                      sla: {
                        deliveryTime: 14,
                        lastMileTravel: 0.6,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "0.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                            description: "bolt!",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/home-plate-by-eatfit-6th-block-koramangala-rest288678",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "558763",
                      name: "HRX by EatFit",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/95132f3e-0f3a-410c-aff0-0e97499054ae_558763.JPG",
                      locality: "6th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹450 for two",
                      cuisines: ["Healthy Food", "Salads", "Burgers"],
                      avgRating: 4.5,
                      parentId: "335529",
                      avgRatingString: "4.5",
                      totalRatingsString: "633",
                      sla: {
                        deliveryTime: 15,
                        lastMileTravel: 0.6,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "0.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                            description: "bolt!",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/hrx-by-eatfit-6th-block-koramangala-rest558763",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "819617",
                      name: "Boba Bhai",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/813c82af-f673-4609-aeaf-bc019d274998_819617.jpg",
                      locality: "5TH SECTOR",
                      areaName: "HSR Layout",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Bubble Tea",
                        "Burger",
                        "Korean",
                        "Beverages",
                        "Fast Food",
                        "Juice and shake",
                      ],
                      avgRating: 4.1,
                      parentId: "361235",
                      avgRatingString: "4.1",
                      totalRatingsString: "525",
                      sla: {
                        deliveryTime: 31,
                        lastMileTravel: 3.6,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "3.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-25 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/boba-bhai-5th-sector-hsr-layout-rest819617",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "426776",
                      name: "Theobroma",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/18/c9ea6e0f-d587-426d-98cf-29244de6a766_426776.jpg",
                      locality: "7th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹400 for two",
                      cuisines: ["Desserts", "Bakery", "Beverages"],
                      avgRating: 4.7,
                      parentId: "1040",
                      avgRatingString: "4.7",
                      totalRatingsString: "5.6K+",
                      sla: {
                        deliveryTime: 15,
                        lastMileTravel: 1.4,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "1.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-18 23:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                            description: "bolt!",
                          },
                          {
                            imageId: "Rxawards/_CATEGORY-Desserts.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "15% OFF",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/theobroma-7th-block-koramangala-rest426776",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "38634",
                      name: "Third Wave Coffee",
                      cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
                      locality: "Koramangala",
                      areaName: "Koramangala",
                      costForTwo: "₹400 for two",
                      cuisines: ["Beverages", "Bakery", "Continental"],
                      avgRating: 4.6,
                      parentId: "274773",
                      avgRatingString: "4.6",
                      totalRatingsString: "6.6K+",
                      sla: {
                        deliveryTime: 24,
                        lastMileTravel: 0.9,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "0.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 03:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                            description: "bolt!",
                          },
                          {
                            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            description: "Delivery!",
                          },
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId:
                                    "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.4",
                          ratingCount: "4.7K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/third-wave-coffee-koramangala-rest38634",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "733092",
                      name: "Caterspoint",
                      cloudinaryImageId: "be3c347a3ff9e54393083264ebb9228f",
                      locality: "Hosur Road",
                      areaName: "HSR",
                      costForTwo: "₹500 for two",
                      cuisines: [
                        "Salads",
                        "Healthy food",
                        "Snacks",
                        "pastas",
                        "Lebanese",
                        "Mexican",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.4,
                      parentId: "11011",
                      avgRatingString: "4.4",
                      totalRatingsString: "1.6K+",
                      sla: {
                        deliveryTime: 31,
                        lastMileTravel: 2.1,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "2.1 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/caterspoint-hosur-road-hsr-rest733092",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "125956",
                      name: "Glen's Bakehouse",
                      cloudinaryImageId: "whfviizdgvwg0uwfk8dy",
                      locality: "Koramangala",
                      areaName: "Koramangala",
                      costForTwo: "₹500 for two",
                      cuisines: [
                        "Desserts",
                        "Bakery",
                        "Beverages",
                        "Continental",
                        "Italian",
                      ],
                      avgRating: 4.5,
                      parentId: "3220",
                      avgRatingString: "4.5",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 20,
                        lastMileTravel: 0.5,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "0.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                            description: "bolt!",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.3",
                          ratingCount: "4.3K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/glens-bakehouse-koramangala-rest125956",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "8736",
                      name: "Krispy Kreme - Doughnuts & Coffee",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/3/808c4c74-f3cb-47d6-9116-78bd1a179dde_8736.jpg",
                      locality: "100 Ft intermediate Ring Road",
                      areaName: "Koramangala",
                      costForTwo: "₹170 for two",
                      cuisines: [
                        "Bakery",
                        "Desserts",
                        "Snacks",
                        "Cafe",
                        "Coffee",
                        "Beverages",
                      ],
                      avgRating: 4.6,
                      veg: true,
                      parentId: "570",
                      avgRatingString: "4.6",
                      totalRatingsString: "1.6K+",
                      sla: {
                        deliveryTime: 19,
                        lastMileTravel: 0.6,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "0.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-18 22:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId:
                              "Green%20Dot%20Awards/Best%20In%20Waffle.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId:
                                    "Green%20Dot%20Awards/Best%20In%20Waffle.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/krispy-kreme-doughnuts-and-coffee-100-ft-intermediate-ring-road-koramangala-rest8736",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "575030",
                      name: "Veg Daawat by Behrouz",
                      cloudinaryImageId: "2b579171cefc545ce6479e21c0016798",
                      locality: "1st Block",
                      areaName: "Koramangala",
                      costForTwo: "₹700 for two",
                      cuisines: [
                        "Biryani",
                        "North Indian",
                        "Kebabs",
                        "Mughlai",
                        "Lucknowi",
                        "Hyderabadi",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.1,
                      veg: true,
                      parentId: "344904",
                      avgRatingString: "4.1",
                      totalRatingsString: "42",
                      sla: {
                        deliveryTime: 28,
                        lastMileTravel: 2.2,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "2.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-18 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/veg-daawat-by-behrouz-1st-block-koramangala-rest575030",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "837866",
                      name: "The Pizza Project by Oven Story",
                      cloudinaryImageId: "f1b907b0b8f86c62e4fc347c6b1434e6",
                      locality: "Jakkasandra",
                      areaName: "Hsr Layout 5th Sector",
                      costForTwo: "₹400 for two",
                      cuisines: ["Pizzas", "Italian", "Desserts", "Beverages"],
                      avgRating: 4.1,
                      parentId: "497031",
                      avgRatingString: "4.1",
                      totalRatingsString: "41",
                      sla: {
                        deliveryTime: 32,
                        lastMileTravel: 2.2,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "2.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-18 23:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/the-pizza-project-by-oven-story-jakkasandra-hsr-layout-5th-sector-rest837866",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "776753",
                      name: "Blue Tokai Coffee Roasters",
                      cloudinaryImageId: "1a0521375f07155eda2f1ed263206831",
                      locality: "1St Cross Rd",
                      areaName: "Koramangala",
                      costForTwo: "₹600 for two",
                      cuisines: ["Cafe", "Coffee", "Beverages"],
                      avgRating: 4.6,
                      parentId: "2682",
                      avgRatingString: "4.6",
                      totalRatingsString: "239",
                      sla: {
                        deliveryTime: 15,
                        lastMileTravel: 0.4,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "0.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-18 23:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "15% OFF",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/blue-tokai-coffee-roasters-1st-cross-rd-koramangala-rest776753",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "25645",
                      name: "Barista Coffee",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/29/9aa4baf6-83f7-4995-8e3b-fb998c9da055_25645.jpg",
                      locality: "4th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹350 for two",
                      cuisines: ["Beverages", "Snacks", "Desserts"],
                      avgRating: 4.3,
                      parentId: "416281",
                      avgRatingString: "4.3",
                      totalRatingsString: "1.8K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 1.5,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 01:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.1",
                          ratingCount: "588",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/barista-coffee-4th-block-koramangala-rest25645",
                      type: "WEBLINK",
                    },
                  },
                ],
                theme: "Restaurant_Group_WebView_SEO_PB_Theme",
                widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.41111112,
                    reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 0.7027027,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                  layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
                },
                collectionId: "84124",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
            title: "Restaurants with online food delivery in Bangalore",
            id: "popular_restaurants_title",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            sortConfigs: [
              {
                key: "relevance",
                title: "Relevance (Default)",
                selected: true,
                defaultSelection: true,
              },
              {
                key: "deliveryTimeAsc",
                title: "Delivery Time",
              },
              {
                key: "modelBasedRatingDesc",
                title: "Rating",
              },
              {
                key: "costForTwoAsc",
                title: "Cost: Low to High",
              },
              {
                key: "costForTwoDesc",
                title: "Cost: High to Low",
              },
            ],
            restaurantCount: 2000,
            facetList: [
              {
                label: "Delivery Time",
                id: "deliveryTime",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Fast Delivery",
                    id: "deliveryTimefacetquery1",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filterby",
              },
              {
                label: "Cuisines",
                id: "catalog_cuisines",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Afghani",
                    id: "query_afghani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "American",
                    id: "query_american",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Andhra",
                    id: "query_andhra",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Arabian",
                    id: "query_arabian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Asian",
                    id: "query_asian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Assamese",
                    id: "query_assamese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Awadhi",
                    id: "query_awadhi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bakery",
                    id: "query_bakery",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Barbecue",
                    id: "query_barbecue",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bengali",
                    id: "query_bengali",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Beverages",
                    id: "query_beverages",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bihari",
                    id: "query_bihari",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Biryani",
                    id: "query_biryani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "British",
                    id: "query_british",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Brownies",
                    id: "query_brownies",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bubble Tea",
                    id: "query_bubble_tea",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Burger",
                    id: "query_burger",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Burgers",
                    id: "query_burgers",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Burmese",
                    id: "query_burmese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cafe",
                    id: "query_cafe",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cakes",
                    id: "query_cakes",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cakes & Pastries",
                    id: "query_cakes_&_pastries",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cakes and Pastries",
                    id: "query_cakes_and_pastries",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Chaat",
                    id: "query_chaat",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Chettinad",
                    id: "query_chettinad",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Chinese",
                    id: "query_chinese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Coastal",
                    id: "query_coastal",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Coffee",
                    id: "query_coffee",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Combo",
                    id: "query_combo",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Confectionery",
                    id: "query_confectionery",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Continental",
                    id: "query_continental",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Default",
                    id: "query_default",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Desserts",
                    id: "query_desserts",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "European",
                    id: "query_european",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Fast Food",
                    id: "query_fast_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "French",
                    id: "query_french",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "German",
                    id: "query_german",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Grill",
                    id: "query_grill",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Gujarati",
                    id: "query_gujarati",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Healthy Food",
                    id: "query_healthy_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Healthy food",
                    id: "query_healthy_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Home Food",
                    id: "query_home_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Hyderabadi",
                    id: "query_hyderabadi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ice Cream",
                    id: "query_ice_cream",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ice Cream Cakes",
                    id: "query_ice_cream_cakes",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Indian",
                    id: "query_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Indonesian",
                    id: "query_indonesian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Italian",
                    id: "query_italian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Italian-American",
                    id: "query_italian-american",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Jain",
                    id: "query_jain",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Japanese",
                    id: "query_japanese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Juice and shake",
                    id: "query_juice_and_shake",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Juices",
                    id: "query_juices",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Kashmiri",
                    id: "query_kashmiri",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Kebabs",
                    id: "query_kebabs",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Kerala",
                    id: "query_kerala",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Keto",
                    id: "query_keto",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Khasi",
                    id: "query_khasi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Korean",
                    id: "query_korean",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Lebanese",
                    id: "query_lebanese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Lucknowi",
                    id: "query_lucknowi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Maharashtrian",
                    id: "query_maharashtrian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mangalorean",
                    id: "query_mangalorean",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Meat",
                    id: "query_meat",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mediterranean",
                    id: "query_mediterranean",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mexican",
                    id: "query_mexican",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Middle Eastern",
                    id: "query_middle_eastern",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Momos",
                    id: "query_momos",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mughlai",
                    id: "query_mughlai",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Navratri Special",
                    id: "query_navratri_special",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Nepalese",
                    id: "query_nepalese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "North Eastern",
                    id: "query_north_eastern",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "North Indian",
                    id: "query_north_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Oriental",
                    id: "query_oriental",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Oriya",
                    id: "query_oriya",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Paan",
                    id: "query_paan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pan-Asian",
                    id: "query_pan-asian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Parsi",
                    id: "query_parsi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pasta",
                    id: "query_pasta",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pastas",
                    id: "query_pastas",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Persian",
                    id: "query_persian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pizzas",
                    id: "query_pizzas",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Portuguese",
                    id: "query_portuguese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Punjabi",
                    id: "query_punjabi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rajasthani",
                    id: "query_rajasthani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rayalaseema",
                    id: "query_rayalaseema",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rolls",
                    id: "query_rolls",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rolls & Wraps",
                    id: "query_rolls_&_wraps",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Salads",
                    id: "query_salads",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Seafood",
                    id: "query_seafood",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Shawarma",
                    id: "query_shawarma",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Snacks",
                    id: "query_snacks",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "South American",
                    id: "query_south_american",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "South Indian",
                    id: "query_south_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Spanish",
                    id: "query_spanish",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sri Lankan",
                    id: "query_sri_lankan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Steakhouse",
                    id: "query_steakhouse",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Street Food",
                    id: "query_street_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sushi",
                    id: "query_sushi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sweets",
                    id: "query_sweets",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tandoor",
                    id: "query_tandoor",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tandoori",
                    id: "query_tandoori",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tea",
                    id: "query_tea",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Telangana",
                    id: "query_telangana",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tex-Mex",
                    id: "query_tex-mex",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Thai",
                    id: "query_thai",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Thalis",
                    id: "query_thalis",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tibetan",
                    id: "query_tibetan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Turkish",
                    id: "query_turkish",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Vietnamese",
                    id: "query_vietnamese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Waffle",
                    id: "query_waffle",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "briyani",
                    id: "query_briyani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "dessert",
                    id: "query_dessert",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "fastfood",
                    id: "query_fastfood",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "juice",
                    id: "query_juice",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "paratha",
                    id: "query_paratha",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "pastas",
                    id: "query_pastas",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "pav bhaji",
                    id: "query_pav_bhaji",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "pizza",
                    id: "query_pizza",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "rolls",
                    id: "query_rolls",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "sandwich",
                    id: "query_sandwich",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "shawarma",
                    id: "query_shawarma",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "snack",
                    id: "query_snack",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "veg restaurant",
                    id: "query_veg_restaurant",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "wrap",
                    id: "query_wrap",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                canSearch: true,
                subLabel: "Filterbycuisine",
                openFilter: true,
              },
              {
                label: "Explore",
                id: "explore",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "New on Swiggy",
                    id: "newfacetquery1",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
              },
              {
                label: "Ratings",
                id: "rating",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Ratings 4.5+",
                    id: "ratingfacetquery3",
                    analytics: {},
                  },
                  {
                    label: "Ratings 4.0+",
                    id: "ratingfacetquery4",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ratings 3.5+",
                    id: "ratingfacetquery5",
                    analytics: {},
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filterby",
              },
              {
                label: "Veg/Non-Veg",
                id: "isVeg",
                selection: "SELECT_TYPE_SINGLESELECT",
                facetInfo: [
                  {
                    label: "Pure Veg",
                    id: "isVegfacetquery2",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Non Veg",
                    id: "isVegfacetquery3",
                    analytics: {},
                  },
                ],
                viewType: "VIEW_TYPE_FLATTENED",
                subLabel: "Filterby",
              },
              {
                label: "Offers",
                id: "restaurantOfferMultiTd",
                selection: "SELECT_TYPE_SINGLESELECT",
                facetInfo: [
                  {
                    label: "Offers",
                    id: "restaurantOfferMultiTdfacetquery3",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_FLATTENED",
                subLabel: "Restaurantswith",
              },
              {
                label: "Cost for two",
                id: "costForTwo",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Rs. 300-Rs. 600",
                    id: "costForTwofacetquery3",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Greater than Rs. 600",
                    id: "costForTwofacetquery4",
                    analytics: {},
                  },
                  {
                    label: "Less than Rs. 300",
                    id: "costForTwofacetquery5",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filterby",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              columns: 4,
            },
            id: "restaurant_grid_listing",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "393840",
                      name: "Chinese Wok",
                      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
                      locality: "Chikka Lakshmaiah Layout",
                      areaName: "Adugodi",
                      costForTwo: "₹250 for two",
                      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
                      avgRating: 4.3,
                      parentId: "61955",
                      avgRatingString: "4.3",
                      totalRatingsString: "5.2K+",
                      sla: {
                        deliveryTime: 40,
                        lastMileTravel: 2.6,
                        serviceability: "SERVICEABLE",
                        slaString: "35-40 mins",
                        lastMileTravelString: "2.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 02:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId:
                              "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId:
                                    "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹149",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/chinese-wok-chikka-lakshmaiah-layout-adugodi-rest393840",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "201224",
                      name: "Asha Tiffins",
                      cloudinaryImageId: "n15vckntsiboiod3gpco",
                      locality: "HSR Layout",
                      areaName: "HSR Layout",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Chinese",
                        "Desserts",
                        "Beverages",
                        "North Indian",
                      ],
                      avgRating: 4.5,
                      parentId: "236243",
                      avgRatingString: "4.5",
                      totalRatingsString: "66K+",
                      sla: {
                        deliveryTime: 26,
                        lastMileTravel: 4,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "4.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-18 15:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.4",
                          ratingCount: "16K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/asha-tiffins-hsr-layout-rest201224",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "898222",
                      name: "Iyer Idly",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/cb744abd-3aa1-4221-9c8d-dbca6563573e_898222.jpg",
                      locality: "Adugodi",
                      areaName: "Koramangala",
                      costForTwo: "₹200 for two",
                      cuisines: ["South Indian"],
                      avgRating: 4.6,
                      veg: true,
                      parentId: "247814",
                      avgRatingString: "4.6",
                      totalRatingsString: "121",
                      sla: {
                        deliveryTime: 21,
                        lastMileTravel: 1.6,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-18 21:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                            description: "bolt!",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/iyer-idly-adugodi-koramangala-rest898222",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "269402",
                      name: "The Tea Brewery",
                      cloudinaryImageId: "v4s7ectlujr8325ejrnc",
                      locality: "1st Block",
                      areaName: "Koramangala",
                      costForTwo: "₹100 for two",
                      cuisines: [
                        "Beverages",
                        "Snacks",
                        "Bakery",
                        "Desserts",
                        "Fast Food",
                        "Chaat",
                        "Healthy Food",
                      ],
                      avgRating: 4.6,
                      parentId: "21147",
                      avgRatingString: "4.6",
                      totalRatingsString: "12K+",
                      sla: {
                        deliveryTime: 24,
                        lastMileTravel: 1.6,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 00:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                            description: "bolt!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/the-tea-brewery-1st-block-koramangala-rest269402",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "628436",
                      name: "Third Wave Coffee",
                      cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
                      locality: "8th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹400 for two",
                      cuisines: ["Beverages", "Bakery", "Continental"],
                      avgRating: 4.6,
                      parentId: "274773",
                      avgRatingString: "4.6",
                      totalRatingsString: "755",
                      sla: {
                        deliveryTime: 17,
                        lastMileTravel: 0.9,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "0.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-18 22:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                            description: "bolt!",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/third-wave-coffee-8th-block-koramangala-rest628436",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "325",
                      name: "Sree Krishna Kafe",
                      cloudinaryImageId: "us72sjlfo9opsmi8fi6u",
                      locality: "Koramangala",
                      areaName: "Koramangala",
                      costForTwo: "₹137 for two",
                      cuisines: ["South Indian"],
                      avgRating: 4.7,
                      parentId: "898",
                      avgRatingString: "4.7",
                      totalRatingsString: "54K+",
                      sla: {
                        deliveryTime: 14,
                        lastMileTravel: 0.7,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "0.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-18 22:30:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                            description: "bolt!",
                          },
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "bolt!",
                                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.3",
                          ratingCount: "4.7K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/sree-krishna-kafe-koramangala-rest325",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "241027",
                      name: "Namaste",
                      cloudinaryImageId: "dtcwa1rxdskp3crqvpr3",
                      locality: "3rd Sector",
                      areaName: "Hsr Layout",
                      costForTwo: "₹100 for two",
                      cuisines: ["South Indian", "Chinese", "Thalis"],
                      avgRating: 4.4,
                      veg: true,
                      parentId: "366271",
                      avgRatingString: "4.4",
                      totalRatingsString: "28K+",
                      sla: {
                        deliveryTime: 30,
                        lastMileTravel: 4.5,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "4.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-19 01:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/namaste-3rd-sector-hsr-layout-rest241027",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "793210",
                      name: "Aattutheeram Kerala Restaurant",
                      cloudinaryImageId: "7dad18ba53a7f5fd4df728f9173ad706",
                      locality: "Thippiah Layout",
                      areaName: "Koramangala",
                      costForTwo: "₹350 for two",
                      cuisines: [
                        "Kerala",
                        "Biryani",
                        "Chinese",
                        "Snacks",
                        "Seafood",
                        "Desserts",
                      ],
                      avgRating: 4.3,
                      parentId: "21348",
                      avgRatingString: "4.3",
                      totalRatingsString: "562",
                      sla: {
                        deliveryTime: 15,
                        lastMileTravel: 0.7,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "0.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-12-18 23:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "15% OFF",
                        subHeader: "UPTO ₹45",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d",
                    },
                    cta: {
                      link: "https://www.swiggy.com/city/bangalore/aattutheeram-kerala-restaurant-thippiah-layout-koramangala-rest793210",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                ],
                theme: "SeoRestaurantListingGridWidget",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
            message: "Show More",
            id: "show_more_button",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Best Places to Eat Across Cities",
            brands: [
              {
                text: "Best Restaurants in Bangalore",
                link: "https://www.swiggy.com/city/bangalore/best-restaurants",
              },
              {
                text: "Best Restaurants in Pune",
                link: "https://www.swiggy.com/city/pune/best-restaurants",
              },
              {
                text: "Best Restaurants in Mumbai",
                link: "https://www.swiggy.com/city/mumbai/best-restaurants",
              },
              {
                text: "Best Restaurants in Delhi",
                link: "https://www.swiggy.com/city/delhi/best-restaurants",
              },
              {
                text: "Best Restaurants in Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Kolkata",
                link: "https://www.swiggy.com/city/kolkata/best-restaurants",
              },
              {
                text: "Best Restaurants in Chennai",
                link: "https://www.swiggy.com/city/chennai/best-restaurants",
              },
              {
                text: "Best Restaurants in Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Jaipur",
                link: "https://www.swiggy.com/city/jaipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Nagpur",
                link: "https://www.swiggy.com/city/nagpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar/best-restaurants",
              },
              {
                text: "Best Restaurants in Kochi",
                link: "https://www.swiggy.com/city/kochi/best-restaurants",
              },
              {
                text: "Best Restaurants in Surat",
                link: "https://www.swiggy.com/city/surat/best-restaurants",
              },
              {
                text: "Best Restaurants in Dehradun",
                link: "https://www.swiggy.com/city/dehradun/best-restaurants",
              },
              {
                text: "Best Restaurants in Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana/best-restaurants",
              },
              {
                text: "Best Restaurants in Patna",
                link: "https://www.swiggy.com/city/patna/best-restaurants",
              },
              {
                text: "Best Restaurants in Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhopal",
                link: "https://www.swiggy.com/city/bhopal/best-restaurants",
              },
              {
                text: "Best Restaurants in Gurgaon",
                link: "https://www.swiggy.com/city/gurgaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore/best-restaurants",
              },
              {
                text: "Best Restaurants in Agra",
                link: "https://www.swiggy.com/city/agra/best-restaurants",
              },
              {
                text: "Best Restaurants in Noida",
                link: "https://www.swiggy.com/city/noida/best-restaurants",
              },
              {
                text: "Best Restaurants in Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada/best-restaurants",
              },
              {
                text: "Best Restaurants in Guwahati",
                link: "https://www.swiggy.com/city/guwahati/best-restaurants",
              },
              {
                text: "Best Restaurants in Mysore",
                link: "https://www.swiggy.com/city/mysore/best-restaurants",
              },
              {
                text: "Best Restaurants in Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry/best-restaurants",
              },
              {
                text: "Best Restaurants in Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants",
              },
              {
                text: "Best Restaurants in Ranchi",
                link: "https://www.swiggy.com/city/ranchi/best-restaurants",
              },
              {
                text: "Best Restaurants in Vizag",
                link: "https://www.swiggy.com/city/vizag/best-restaurants",
              },
              {
                text: "Best Restaurants in Udaipur",
                link: "https://www.swiggy.com/city/udaipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Vadodara",
                link: "https://www.swiggy.com/city/vadodara/best-restaurants",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Best Cuisines Near Me",
            brands: [
              {
                text: "Chinese Restaurant Near Me",
                link: "https://www.swiggy.com/chinese-restaurants-near-me",
              },
              {
                text: "South Indian Restaurant Near Me",
                link: "https://www.swiggy.com/south-indian-restaurants-near-me",
              },
              {
                text: "Indian Restaurant Near Me",
                link: "https://www.swiggy.com/indian-restaurants-near-me",
              },
              {
                text: "Kerala Restaurant Near Me",
                link: "https://www.swiggy.com/kerala-restaurants-near-me",
              },
              {
                text: "Korean Restaurant Near Me",
                link: "https://www.swiggy.com/korean-restaurants-near-me",
              },
              {
                text: "North Indian Restaurant Near Me",
                link: "https://www.swiggy.com/north-indian-restaurants-near-me",
              },
              {
                text: "Seafood Restaurant Near Me",
                link: "https://www.swiggy.com/seafood-restaurants-near-me",
              },
              {
                text: "Bengali Restaurant Near Me",
                link: "https://www.swiggy.com/bengali-restaurants-near-me",
              },
              {
                text: "Punjabi Restaurant Near Me",
                link: "https://www.swiggy.com/punjabi-restaurants-near-me",
              },
              {
                text: "Italian Restaurant Near Me",
                link: "https://www.swiggy.com/italian-restaurants-near-me",
              },
              {
                text: "Andhra Restaurant Near Me",
                link: "https://www.swiggy.com/andhra-restaurants-near-me",
              },
              {
                text: "Biryani Restaurant Near Me",
                link: "https://www.swiggy.com/biryani-restaurants-near-me",
              },
              {
                text: "Japanese Restaurant Near Me",
                link: "https://www.swiggy.com/japanese-restaurants-near-me",
              },
              {
                text: "Arabian Restaurant Near Me",
                link: "https://www.swiggy.com/arabian-restaurants-near-me",
              },
              {
                text: "Fast Food Restaurant Near Me",
                link: "https://www.swiggy.com/fast-food-restaurants-near-me",
              },
              {
                text: "Jain Restaurant Near Me",
                link: "https://www.swiggy.com/jain-restaurants-near-me",
              },
              {
                text: "Gujarati Restaurant Near Me",
                link: "https://www.swiggy.com/gujarati-restaurants-near-me",
              },
              {
                text: "Thai Restaurant Near Me",
                link: "https://www.swiggy.com/thai-restaurants-near-me",
              },
              {
                text: "Pizzas Restaurant Near Me",
                link: "https://www.swiggy.com/pizzas-restaurants-near-me",
              },
              {
                text: "Asian Restaurant Near Me",
                link: "https://www.swiggy.com/asian-restaurants-near-me",
              },
              {
                text: "Cafe Restaurant Near Me",
                link: "https://www.swiggy.com/cafe-restaurants-near-me",
              },
              {
                text: "Continental Restaurant Near Me",
                link: "https://www.swiggy.com/continental-restaurants-near-me",
              },
              {
                text: "Mexican Restaurant Near Me",
                link: "https://www.swiggy.com/mexican-restaurants-near-me",
              },
              {
                text: "Mughlai Restaurant Near Me",
                link: "https://www.swiggy.com/mughlai-restaurants-near-me",
              },
              {
                text: "Sushi Restaurant Near Me",
                link: "https://www.swiggy.com/sushi-restaurants-near-me",
              },
              {
                text: "Mangalorean Restaurant Near Me",
                link: "https://www.swiggy.com/mangalorean-restaurants-near-me",
              },
              {
                text: "Tibetan Restaurant Near Me",
                link: "https://www.swiggy.com/tibetan-restaurants-near-me",
              },
              {
                text: "Barbecue Restaurant Near Me",
                link: "https://www.swiggy.com/barbecue-restaurants-near-me",
              },
              {
                text: "Maharashtrian Restaurant Near Me",
                link: "https://www.swiggy.com/maharashtrian-restaurants-near-me",
              },
              {
                text: "Nepalese Restaurant Near Me",
                link: "https://www.swiggy.com/nepalese-restaurants-near-me",
              },
              {
                text: "Rajasthani Restaurant Near Me",
                link: "https://www.swiggy.com/rajasthani-restaurants-near-me",
              },
              {
                text: "Turkish Restaurant Near Me",
                link: "https://www.swiggy.com/turkish-restaurants-near-me",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Explore Every Restaurants Near Me",
            brands: [
              {
                text: "Explore Restaurants Near Me",
                link: "https://www.swiggy.com/restaurants-near-me",
              },
              {
                text: "Explore Top Rated Restaurants Near Me",
                link: "https://www.swiggy.com/best-restaurants-near-me",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
            title: "For better experience,download the Swiggy app now",
            androidAppImage: "portal/m/play_store.png",
            androidAppLink:
              "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
            iosAppImage: "portal/m/app_store.png",
            iosAppLink:
              "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
            id: "app_install_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
            cities: [
              {
                text: "Bangalore",
                link: "https://www.swiggy.com/city/bangalore",
              },
              {
                text: "Gurgaon",
                link: "https://www.swiggy.com/city/gurgaon",
              },
              {
                text: "Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad",
              },
              {
                text: "Delhi",
                link: "https://www.swiggy.com/city/delhi",
              },
              {
                text: "Mumbai",
                link: "https://www.swiggy.com/city/mumbai",
              },
              {
                text: "Pune",
                link: "https://www.swiggy.com/city/pune",
              },
              {
                text: "Kolkata",
                link: "https://www.swiggy.com/city/kolkata",
              },
              {
                text: "Chennai",
                link: "https://www.swiggy.com/city/chennai",
              },
              {
                text: "Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad",
              },
              {
                text: "Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh",
              },
              {
                text: "Jaipur",
                link: "https://www.swiggy.com/city/jaipur",
              },
              {
                text: "Kochi",
                link: "https://www.swiggy.com/city/kochi",
              },
              {
                text: "Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore",
              },
              {
                text: "Lucknow",
                link: "https://www.swiggy.com/city/lucknow",
              },
              {
                text: "Nagpur",
                link: "https://www.swiggy.com/city/nagpur",
              },
              {
                text: "Vadodara",
                link: "https://www.swiggy.com/city/vadodara",
              },
              {
                text: "Indore",
                link: "https://www.swiggy.com/city/indore",
              },
              {
                text: "Guwahati",
                link: "https://www.swiggy.com/city/guwahati",
              },
              {
                text: "Vizag",
                link: "https://www.swiggy.com/city/vizag",
              },
              {
                text: "Surat",
                link: "https://www.swiggy.com/city/surat",
              },
              {
                text: "Dehradun",
                link: "https://www.swiggy.com/city/dehradun",
              },
              {
                text: "Noida",
                link: "https://www.swiggy.com/city/noida",
              },
              {
                text: "Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana",
              },
              {
                text: "Trichy",
                link: "https://www.swiggy.com/city/trichy",
              },
              {
                text: "Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada",
              },
              {
                text: "Kanpur",
                link: "https://www.swiggy.com/city/kanpur",
              },
              {
                text: "Mysore",
                link: "https://www.swiggy.com/city/mysore",
              },
              {
                text: "Nashik",
                link: "https://www.swiggy.com/city/nashik",
              },
              {
                text: "Udaipur",
                link: "https://www.swiggy.com/city/udaipur",
              },
              {
                text: "Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry",
              },
              {
                text: "Agra",
                link: "https://www.swiggy.com/city/agra",
              },
              {
                text: "Aurangabad",
                link: "https://www.swiggy.com/city/aurangabad",
              },
              {
                text: "Jalandhar",
                link: "https://www.swiggy.com/city/jalandhar",
              },
              {
                text: "Kota",
                link: "https://www.swiggy.com/city/kota",
              },
              {
                text: "Madurai",
                link: "https://www.swiggy.com/city/madurai",
              },
              {
                text: "Allahabad",
                link: "https://www.swiggy.com/city/allahabad",
              },
              {
                text: "Manipal",
                link: "https://www.swiggy.com/city/manipal",
              },
              {
                text: "Amritsar",
                link: "https://www.swiggy.com/city/amritsar",
              },
              {
                text: "Bareilly",
                link: "https://www.swiggy.com/city/bareilly",
              },
              {
                text: "Meerut",
                link: "https://www.swiggy.com/city/meerut",
              },
              {
                text: "Bhopal",
                link: "https://www.swiggy.com/city/bhopal",
              },
              {
                text: "Ooty",
                link: "https://www.swiggy.com/city/ooty",
              },
              {
                text: "Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar",
              },
              {
                text: "Raipur",
                link: "https://www.swiggy.com/city/raipur",
              },
              {
                text: "Bikaner",
                link: "https://www.swiggy.com/city/bikaner",
              },
              {
                text: "Rajkot",
                link: "https://www.swiggy.com/city/rajkot",
              },
              {
                text: "Kozhikode",
                link: "https://www.swiggy.com/city/kozhikode",
              },
              {
                text: "Central Goa",
                link: "https://www.swiggy.com/city/central-goa",
              },
              {
                text: "Sirsa",
                link: "https://www.swiggy.com/city/sirsa",
              },
              {
                text: "Gwalior",
                link: "https://www.swiggy.com/city/gwalior",
              },
              {
                text: "Thrissur",
                link: "https://www.swiggy.com/city/thrissur",
              },
              {
                text: "Kharagpur",
                link: "https://www.swiggy.com/city/kharagpur",
              },
              {
                text: "Tirupati",
                link: "https://www.swiggy.com/city/tirupati",
              },
              {
                text: "Tirupur",
                link: "https://www.swiggy.com/city/tirupur",
              },
              {
                text: "Vellore",
                link: "https://www.swiggy.com/city/vellore",
              },
              {
                text: "Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram",
              },
              {
                text: "Warangal",
                link: "https://www.swiggy.com/city/warangal",
              },
              {
                text: "Varanasi",
                link: "https://www.swiggy.com/city/varanasi",
              },
              {
                text: "Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru",
              },
              {
                text: "Patna",
                link: "https://www.swiggy.com/city/patna",
              },
              {
                text: "Ranchi",
                link: "https://www.swiggy.com/city/ranchi",
              },
              {
                text: "Faridabad",
                link: "https://www.swiggy.com/city/faridabad",
              },
              {
                text: "Guntur",
                link: "https://www.swiggy.com/city/guntur",
              },
              {
                text: "Ujjain",
                link: "https://www.swiggy.com/city/ujjain",
              },
              {
                text: "Patiala",
                link: "https://www.swiggy.com/city/patiala",
              },
              {
                text: "Karnal",
                link: "https://www.swiggy.com/city/karnal",
              },
              {
                text: "Kakinada",
                link: "https://www.swiggy.com/city/kakinada",
              },
              {
                text: "Rajahmundry",
                link: "https://www.swiggy.com/city/rajahmundry",
              },
              {
                text: "Bilaspur",
                link: "https://www.swiggy.com/city/bilaspur",
              },
              {
                text: "Bhilai",
                link: "https://www.swiggy.com/city/bhilai",
              },
              {
                text: "Anand",
                link: "https://www.swiggy.com/city/anand",
              },
              {
                text: "Bhavnagar",
                link: "https://www.swiggy.com/city/bhavnagar",
              },
              {
                text: "Jammu",
                link: "https://www.swiggy.com/city/jammu",
              },
              {
                text: "Muktsar",
                link: "https://www.swiggy.com/city/muktsar",
              },
              {
                text: "Panipat",
                link: "https://www.swiggy.com/city/panipat",
              },
              {
                text: "Jamshedpur",
                link: "https://www.swiggy.com/city/jamshedpur",
              },
              {
                text: "Dhanbad",
                link: "https://www.swiggy.com/city/dhanbad",
              },
              {
                text: "Bokaro",
                link: "https://www.swiggy.com/city/bokaro",
              },
              {
                text: "Hubli",
                link: "https://www.swiggy.com/city/hubli",
              },
              {
                text: "Belgaum",
                link: "https://www.swiggy.com/city/belgaum",
              },
              {
                text: "Jabalpur",
                link: "https://www.swiggy.com/city/jabalpur",
              },
              {
                text: "Kolhapur",
                link: "https://www.swiggy.com/city/kolhapur",
              },
              {
                text: "Solapur",
                link: "https://www.swiggy.com/city/solapur",
              },
              {
                text: "Shillong",
                link: "https://www.swiggy.com/city/shillong",
              },
              {
                text: "Cuttack",
                link: "https://www.swiggy.com/city/cuttack",
              },
              {
                text: "Aligarh",
                link: "https://www.swiggy.com/city/aligarh",
              },
              {
                text: "Salem",
                link: "https://www.swiggy.com/city/salem",
              },
              {
                text: "Agartala",
                link: "https://www.swiggy.com/city/agartala",
              },
              {
                text: "Jodhpur",
                link: "https://www.swiggy.com/city/jodhpur",
              },
              {
                text: "Ajmer",
                link: "https://www.swiggy.com/city/ajmer",
              },
              {
                text: "Jhansi",
                link: "https://www.swiggy.com/city/jhansi",
              },
              {
                text: "Gorakhpur",
                link: "https://www.swiggy.com/city/gorakhpur",
              },
              {
                text: "Thanjavur",
                link: "https://www.swiggy.com/city/thanjavur",
              },
              {
                text: "Erode",
                link: "https://www.swiggy.com/city/erode",
              },
              {
                text: "Nellore",
                link: "https://www.swiggy.com/city/nellore",
              },
              {
                text: "Rourkela",
                link: "https://www.swiggy.com/city/rourkela",
              },
              {
                text: "Anantapur",
                link: "https://www.swiggy.com/city/anantapur",
              },
              {
                text: "Kurnool",
                link: "https://www.swiggy.com/city/kurnool",
              },
              {
                text: "Ahmednagar",
                link: "https://www.swiggy.com/city/ahmednagar",
              },
              {
                text: "Phagwara",
                link: "https://www.swiggy.com/city/phagwara",
              },
              {
                text: "Ambala",
                link: "https://www.swiggy.com/city/ambala",
              },
              {
                text: "Ballari",
                link: "https://www.swiggy.com/city/ballari",
              },
              {
                text: "Saharanpur",
                link: "https://www.swiggy.com/city/saharanpur",
              },
              {
                text: "Tirunelveli",
                link: "https://www.swiggy.com/city/tirunelveli",
              },
              {
                text: "Bathinda",
                link: "https://www.swiggy.com/city/bathinda",
              },
              {
                text: "Mathura",
                link: "https://www.swiggy.com/city/mathura",
              },
              {
                text: "Haridwar",
                link: "https://www.swiggy.com/city/haridwar",
              },
              {
                text: "Ratnagiri",
                link: "https://www.swiggy.com/city/ratnagiri",
              },
              {
                text: "Sangli",
                link: "https://www.swiggy.com/city/sangli",
              },
              {
                text: "Amravati",
                link: "https://www.swiggy.com/city/amravati",
              },
              {
                text: "Rishikesh",
                link: "https://www.swiggy.com/city/rishikesh",
              },
              {
                text: "Nagercoil",
                link: "https://www.swiggy.com/city/nagercoil",
              },
              {
                text: "KanyaKumari",
                link: "https://www.swiggy.com/city/kanyakumari",
              },
              {
                text: "Kadapa",
                link: "https://www.swiggy.com/city/kadapa",
              },
              {
                text: "Nizamabad",
                link: "https://www.swiggy.com/city/nizamabad",
              },
              {
                text: "Shivamogga",
                link: "https://www.swiggy.com/city/shivamogga",
              },
              {
                text: "Davanagere",
                link: "https://www.swiggy.com/city/davanagere",
              },
              {
                text: "Roorkee",
                link: "https://www.swiggy.com/city/roorkee",
              },
              {
                text: "Nanded",
                link: "https://www.swiggy.com/city/nanded",
              },
              {
                text: "Rewa",
                link: "https://www.swiggy.com/city/rewa",
              },
              {
                text: "Satna",
                link: "https://www.swiggy.com/city/satna",
              },
              {
                text: "Shimla",
                link: "https://www.swiggy.com/city/shimla",
              },
              {
                text: "Muzaffarpur",
                link: "https://www.swiggy.com/city/muzaffarpur",
              },
              {
                text: "Valsad",
                link: "https://www.swiggy.com/city/valsad",
              },
              {
                text: "Vapi",
                link: "https://www.swiggy.com/city/vapi",
              },
              {
                text: "Chhapra",
                link: "https://www.swiggy.com/city/chhapra",
              },
              {
                text: "Dharamshala",
                link: "https://www.swiggy.com/city/dharamshala",
              },
              {
                text: "Kollam",
                link: "https://www.swiggy.com/city/kollam",
              },
              {
                text: "Silchar",
                link: "https://www.swiggy.com/city/silchar",
              },
              {
                text: "Alappuzha",
                link: "https://www.swiggy.com/city/alappuzha",
              },
              {
                text: "Sonipat",
                link: "https://www.swiggy.com/city/sonipat",
              },
              {
                text: "Rohtak",
                link: "https://www.swiggy.com/city/rohtak",
              },
              {
                text: "Mehsana",
                link: "https://www.swiggy.com/city/mehsana",
              },
              {
                text: "Kullu",
                link: "https://www.swiggy.com/city/kullu",
              },
              {
                text: "Dhule",
                link: "https://www.swiggy.com/city/dhule",
              },
              {
                text: "Dharwad",
                link: "https://www.swiggy.com/city/dharwad",
              },
              {
                text: "Latur",
                link: "https://www.swiggy.com/city/latur",
              },
              {
                text: "Vizianagaram",
                link: "https://www.swiggy.com/city/vizianagaram",
              },
              {
                text: "Khammam",
                link: "https://www.swiggy.com/city/khammam",
              },
              {
                text: "Hampi",
                link: "https://www.swiggy.com/city/hampi",
              },
              {
                text: "Nainital",
                link: "https://www.swiggy.com/city/nainital",
              },
              {
                text: "Akola",
                link: "https://www.swiggy.com/city/akola",
              },
              {
                text: "Kalaburagi",
                link: "https://www.swiggy.com/city/kalaburagi",
              },
              {
                text: "Gaya",
                link: "https://www.swiggy.com/city/gaya",
              },
              {
                text: "Muzaffarnagar",
                link: "https://www.swiggy.com/city/muzaffarnagar",
              },
              {
                text: "Dewas",
                link: "https://www.swiggy.com/city/dewas",
              },
              {
                text: "Korba",
                link: "https://www.swiggy.com/city/korba",
              },
              {
                text: "Mussoorie",
                link: "https://www.swiggy.com/city/mussoorie",
              },
              {
                text: "Jalgaon",
                link: "https://www.swiggy.com/city/jalgaon",
              },
              {
                text: "Yamuna Nagar",
                link: "https://www.swiggy.com/city/yamuna-nagar",
              },
              {
                text: "Bhagalpur",
                link: "https://www.swiggy.com/city/bhagalpur",
              },
              {
                text: "Hapur",
                link: "https://www.swiggy.com/city/hapur",
              },
              {
                text: "Morena",
                link: "https://www.swiggy.com/city/morena",
              },
              {
                text: "Hassan",
                link: "https://www.swiggy.com/city/hassan",
              },
              {
                text: "Hisar",
                link: "https://www.swiggy.com/city/hisar",
              },
              {
                text: "Godhra",
                link: "https://www.swiggy.com/city/godhra",
              },
              {
                text: "Kolar ",
                link: "https://www.swiggy.com/city/kolar",
              },
              {
                text: "Rampur",
                link: "https://www.swiggy.com/city/rampur",
              },
              {
                text: "Sitapur",
                link: "https://www.swiggy.com/city/sitapur",
              },
              {
                text: "Etawah",
                link: "https://www.swiggy.com/city/etawah",
              },
              {
                text: "Porbandar",
                link: "https://www.swiggy.com/city/porbandar",
              },
              {
                text: "Nadiad",
                link: "https://www.swiggy.com/city/nadiad",
              },
              {
                text: "Sagar",
                link: "https://www.swiggy.com/city/sagar",
              },
              {
                text: "Morbi",
                link: "https://www.swiggy.com/city/morbi",
              },
              {
                text: "Chhindwara",
                link: "https://www.swiggy.com/city/chhindwara",
              },
              {
                text: "Tumakuru",
                link: "https://www.swiggy.com/city/tumakuru",
              },
              {
                text: "Singrauli",
                link: "https://www.swiggy.com/city/singrauli",
              },
              {
                text: "Thoothukudi",
                link: "https://www.swiggy.com/city/thoothukudi",
              },
              {
                text: "Katni",
                link: "https://www.swiggy.com/city/katni",
              },
              {
                text: "Khandwa",
                link: "https://www.swiggy.com/city/khandwa",
              },
              {
                text: "Eluru",
                link: "https://www.swiggy.com/city/eluru",
              },
              {
                text: "Malappuram",
                link: "https://www.swiggy.com/city/malappuram",
              },
              {
                text: "Dibrugarh",
                link: "https://www.swiggy.com/city/dibrugarh",
              },
              {
                text: "Deoghar",
                link: "https://www.swiggy.com/city/deoghar",
              },
              {
                text: "Khanna",
                link: "https://www.swiggy.com/city/khanna",
              },
              {
                text: "Bidar",
                link: "https://www.swiggy.com/city/bidar",
              },
              {
                text: "Anantnag",
                link: "https://www.swiggy.com/city/anantnag",
              },
              {
                text: "Madikeri",
                link: "https://www.swiggy.com/city/madikeri",
              },
              {
                text: "Haldwani",
                link: "https://www.swiggy.com/city/haldwani",
              },
              {
                text: "Panchkula",
                link: "https://www.swiggy.com/city/panchkula",
              },
              {
                text: "Farrukhabad",
                link: "https://www.swiggy.com/city/farrukhabad",
              },
              {
                text: "Malegaon",
                link: "https://www.swiggy.com/city/malegaon",
              },
              {
                text: "Dindigul",
                link: "https://www.swiggy.com/city/dindigul",
              },
              {
                text: "Shahjahanpur",
                link: "https://www.swiggy.com/city/shahjahanpur",
              },
              {
                text: "Beed",
                link: "https://www.swiggy.com/city/beed",
              },
              {
                text: "Junagadh",
                link: "https://www.swiggy.com/city/junagadh",
              },
              {
                text: "Asansol",
                link: "https://www.swiggy.com/city/asansol",
              },
              {
                text: "Beawar",
                link: "https://www.swiggy.com/city/beawar",
              },
              {
                text: "Kishangarh",
                link: "https://www.swiggy.com/city/kishangarh",
              },
              {
                text: "Budhwal",
                link: "https://www.swiggy.com/city/budhwal",
              },
              {
                text: "Parbhani",
                link: "https://www.swiggy.com/city/parbhani",
              },
              {
                text: "Gondia",
                link: "https://www.swiggy.com/city/gondia",
              },
              {
                text: "Ichalkaranji",
                link: "https://www.swiggy.com/city/ichalkaranji",
              },
              {
                text: "Jalna",
                link: "https://www.swiggy.com/city/jalna",
              },
              {
                text: "Yavatmal",
                link: "https://www.swiggy.com/city/yavatmal",
              },
              {
                text: "Shivpuri",
                link: "https://www.swiggy.com/city/shivpuri",
              },
              {
                text: "Moga",
                link: "https://www.swiggy.com/city/moga",
              },
              {
                text: "Abohar",
                link: "https://www.swiggy.com/city/abohar",
              },
              {
                text: "Adoni",
                link: "https://www.swiggy.com/city/adoni",
              },
              {
                text: "Madanapalle",
                link: "https://www.swiggy.com/city/madanapalle",
              },
              {
                text: "Tiruvannamalai",
                link: "https://www.swiggy.com/city/tiruvannamalai",
              },
              {
                text: "Satara",
                link: "https://www.swiggy.com/city/satara",
              },
              {
                text: "Ambur",
                link: "https://www.swiggy.com/city/ambur",
              },
              {
                text: "Karimnagar",
                link: "https://www.swiggy.com/city/karimnagar",
              },
              {
                text: "Ratlam",
                link: "https://www.swiggy.com/city/ratlam",
              },
              {
                text: "Moradabad",
                link: "https://www.swiggy.com/city/moradabad",
              },
              {
                text: "Machilipatnam",
                link: "https://www.swiggy.com/city/machilipatnam",
              },
              {
                text: "Ongole",
                link: "https://www.swiggy.com/city/ongole",
              },
              {
                text: "Kottayam",
                link: "https://www.swiggy.com/city/kottayam",
              },
              {
                text: "Darbhanga",
                link: "https://www.swiggy.com/city/darbhanga",
              },
              {
                text: "Kurukshetra",
                link: "https://www.swiggy.com/city/kurukshetra",
              },
              {
                text: "Unnao",
                link: "https://www.swiggy.com/city/unnao",
              },
              {
                text: "Bulandshahr",
                link: "https://www.swiggy.com/city/bulandshahr",
              },
              {
                text: "Durgapur",
                link: "https://www.swiggy.com/city/durgapur",
              },
              {
                text: "Siliguri",
                link: "https://www.swiggy.com/city/siliguri",
              },
              {
                text: "Pali",
                link: "https://www.swiggy.com/city/pali",
              },
              {
                text: "Tadepalligudem",
                link: "https://www.swiggy.com/city/tadepalligudem",
              },
              {
                text: "Ramagundam",
                link: "https://www.swiggy.com/city/ramagundam",
              },
              {
                text: "Mahbubnagar",
                link: "https://www.swiggy.com/city/mahbubnagar",
              },
              {
                text: "Bhiwani",
                link: "https://www.swiggy.com/city/bhiwani",
              },
              {
                text: "Cuddalore",
                link: "https://www.swiggy.com/city/cuddalore",
              },
              {
                text: "Kaithal",
                link: "https://www.swiggy.com/city/kaithal",
              },
              {
                text: "Jagtial",
                link: "https://www.swiggy.com/city/jagtial",
              },
              {
                text: "Palakkad",
                link: "https://www.swiggy.com/city/palakkad",
              },
              {
                text: "Guna",
                link: "https://www.swiggy.com/city/guna",
              },
              {
                text: "Kumbakonam",
                link: "https://www.swiggy.com/city/kumbakonam",
              },
              {
                text: "Maunath Bhanjan",
                link: "https://www.swiggy.com/city/maunath-bhanjan",
              },
              {
                text: "Baripada",
                link: "https://www.swiggy.com/city/baripada",
              },
              {
                text: "Orai",
                link: "https://www.swiggy.com/city/orai",
              },
              {
                text: "Bhadrak",
                link: "https://www.swiggy.com/city/bhadrak",
              },
              {
                text: "Batala",
                link: "https://www.swiggy.com/city/batala",
              },
              {
                text: "Firozpur",
                link: "https://www.swiggy.com/city/firozpur",
              },
              {
                text: "Barnala",
                link: "https://www.swiggy.com/city/barnala",
              },
              {
                text: "Raigarh",
                link: "https://www.swiggy.com/city/raigarh",
              },
              {
                text: "Nagaon",
                link: "https://www.swiggy.com/city/nagaon",
              },
              {
                text: "Mainpuri",
                link: "https://www.swiggy.com/city/mainpuri",
              },
              {
                text: "Balurghat",
                link: "https://www.swiggy.com/city/balurghat",
              },
              {
                text: "Giridih",
                link: "https://www.swiggy.com/city/giridih",
              },
              {
                text: "Ghazipur",
                link: "https://www.swiggy.com/city/ghazipur",
              },
              {
                text: "Jagdalpur",
                link: "https://www.swiggy.com/city/jagdalpur",
              },
              {
                text: "Vidisha",
                link: "https://www.swiggy.com/city/vidisha",
              },
              {
                text: "Dimapur",
                link: "https://www.swiggy.com/city/dimapur",
              },
              {
                text: "Shikohabad",
                link: "https://www.swiggy.com/city/shikohabad",
              },
              {
                text: "Imphal",
                link: "https://www.swiggy.com/city/imphal",
              },
              {
                text: "Lakhimpur",
                link: "https://www.swiggy.com/city/lakhimpur",
              },
              {
                text: "Rudrapur",
                link: "https://www.swiggy.com/city/rudrapur",
              },
              {
                text: "Ambikapur",
                link: "https://www.swiggy.com/city/ambikapur",
              },
              {
                text: "Damoh",
                link: "https://www.swiggy.com/city/damoh",
              },
              {
                text: "Rae Bareli",
                link: "https://www.swiggy.com/city/rae-bareli",
              },
              {
                text: "Tinsukia",
                link: "https://www.swiggy.com/city/tinsukia",
              },
              {
                text: "Rajapalayam",
                link: "https://www.swiggy.com/city/rajapalayam",
              },
              {
                text: "Rajnandgaon",
                link: "https://www.swiggy.com/city/rajnandgaon",
              },
              {
                text: "Kashipur",
                link: "https://www.swiggy.com/city/kashipur",
              },
              {
                text: "Ranibennur",
                link: "https://www.swiggy.com/city/ranibennur",
              },
              {
                text: "Burhanpur",
                link: "https://www.swiggy.com/city/burhanpur",
              },
              {
                text: "Bhadravati",
                link: "https://www.swiggy.com/city/bhadravati",
              },
              {
                text: "Chittoor",
                link: "https://www.swiggy.com/city/chittoor",
              },
              {
                text: "Pudukkottai",
                link: "https://www.swiggy.com/city/pudukkottai",
              },
              {
                text: "Hardoi",
                link: "https://www.swiggy.com/city/hardoi",
              },
              {
                text: "Basti",
                link: "https://www.swiggy.com/city/basti",
              },
              {
                text: "Karaikkudi",
                link: "https://www.swiggy.com/city/karaikkudi",
              },
              {
                text: "Lalitpur",
                link: "https://www.swiggy.com/city/lalitpur",
              },
              {
                text: "Hospet",
                link: "https://www.swiggy.com/city/hospet",
              },
              {
                text: "Budaun",
                link: "https://www.swiggy.com/city/budaun",
              },
              {
                text: "Neemuch",
                link: "https://www.swiggy.com/city/neemuch",
              },
              {
                text: "Pilibhit",
                link: "https://www.swiggy.com/city/pilibhit",
              },
              {
                text: "Amroha",
                link: "https://www.swiggy.com/city/amroha",
              },
              {
                text: "Barshi",
                link: "https://www.swiggy.com/city/barshi",
              },
              {
                text: "Sri Ganganagar",
                link: "https://www.swiggy.com/city/sri-ganganagar",
              },
              {
                text: "Wardha",
                link: "https://www.swiggy.com/city/wardha",
              },
              {
                text: "Sehore",
                link: "https://www.swiggy.com/city/sehore",
              },
              {
                text: "Bhimavaram",
                link: "https://www.swiggy.com/city/bhimavaram",
              },
              {
                text: "Hanumangarh",
                link: "https://www.swiggy.com/city/hanumangarh",
              },
              {
                text: "Pathankot",
                link: "https://www.swiggy.com/city/pathankot",
              },
              {
                text: "Puri",
                link: "https://www.swiggy.com/city/puri",
              },
              {
                text: "Fatehpur",
                link: "https://www.swiggy.com/city/fatehpur",
              },
              {
                text: "Surendranagar Dudhrej",
                link: "https://www.swiggy.com/city/surendranagar-dudhrej",
              },
              {
                text: "Jamnagar",
                link: "https://www.swiggy.com/city/jamnagar",
              },
              {
                text: "Bhuj",
                link: "https://www.swiggy.com/city/bhuj",
              },
              {
                text: "Gandhidham",
                link: "https://www.swiggy.com/city/gandhidham",
              },
              {
                text: "Bharuch",
                link: "https://www.swiggy.com/city/bharuch",
              },
              {
                text: "Navsari",
                link: "https://www.swiggy.com/city/navsari",
              },
              {
                text: "Amreli",
                link: "https://www.swiggy.com/city/amreli",
              },
              {
                text: "Palanpur",
                link: "https://www.swiggy.com/city/palanpur",
              },
              {
                text: "Bhilwara",
                link: "https://www.swiggy.com/city/bhilwara",
              },
              {
                text: "Suratgarh",
                link: "https://www.swiggy.com/city/suratgarh",
              },
              {
                text: "Sikar",
                link: "https://www.swiggy.com/city/sikar",
              },
              {
                text: "Churu",
                link: "https://www.swiggy.com/city/churu",
              },
              {
                text: "Alwar",
                link: "https://www.swiggy.com/city/alwar",
              },
              {
                text: "Bhiwadi",
                link: "https://www.swiggy.com/city/bhiwadi",
              },
              {
                text: "Bharatpur",
                link: "https://www.swiggy.com/city/bharatpur",
              },
              {
                text: "Mount Abu",
                link: "https://www.swiggy.com/city/mount-abu",
              },
              {
                text: "Bundi",
                link: "https://www.swiggy.com/city/bundi",
              },
              {
                text: "Sawai Madhopur",
                link: "https://www.swiggy.com/city/sawai-madhopur",
              },
              {
                text: "Purulia",
                link: "https://www.swiggy.com/city/purulia",
              },
              {
                text: "Bardhaman",
                link: "https://www.swiggy.com/city/bardhaman",
              },
              {
                text: "Raniganj",
                link: "https://www.swiggy.com/city/raniganj",
              },
              {
                text: "Darjeeling",
                link: "https://www.swiggy.com/city/darjeeling",
              },
              {
                text: "Jalpaiguri",
                link: "https://www.swiggy.com/city/jalpaiguri",
              },
              {
                text: "Chittorgarh",
                link: "https://www.swiggy.com/city/chittorgarh",
              },
              {
                text: "Dholpur",
                link: "https://www.swiggy.com/city/dholpur",
              },
              {
                text: "Uluberia",
                link: "https://www.swiggy.com/city/uluberia",
              },
              {
                text: "Nabadwip",
                link: "https://www.swiggy.com/city/nabadwip",
              },
              {
                text: "Bongaon",
                link: "https://www.swiggy.com/city/bongaon",
              },
              {
                text: "Kanchrapara",
                link: "https://www.swiggy.com/city/kanchrapara",
              },
              {
                text: "Bankura",
                link: "https://www.swiggy.com/city/bankura",
              },
              {
                text: "Habra",
                link: "https://www.swiggy.com/city/habra",
              },
              {
                text: "Firozabad",
                link: "https://www.swiggy.com/city/firozabad",
              },
              {
                text: "Nalgonda",
                link: "https://www.swiggy.com/city/nalgonda",
              },
              {
                text: "Chandrapur",
                link: "https://www.swiggy.com/city/chandrapur",
              },
              {
                text: "Bijapur",
                link: "https://www.swiggy.com/city/bijapur",
              },
              {
                text: "Bhusawal",
                link: "https://www.swiggy.com/city/bhusawal",
              },
              {
                text: "Raichur",
                link: "https://www.swiggy.com/city/raichur",
              },
              {
                text: "Bahraich",
                link: "https://www.swiggy.com/city/bahraich",
              },
              {
                text: "Azamgarh",
                link: "https://www.swiggy.com/city/azamgarh",
              },
              {
                text: "Bahadurgarh",
                link: "https://www.swiggy.com/city/bahadurgarh",
              },
              {
                text: "Jind",
                link: "https://www.swiggy.com/city/jind",
              },
              {
                text: "Rewari",
                link: "https://www.swiggy.com/city/rewari",
              },
              {
                text: "Palwal",
                link: "https://www.swiggy.com/city/palwal",
              },
              {
                text: "Hathras",
                link: "https://www.swiggy.com/city/hathras",
              },
              {
                text: "Sambalpur",
                link: "https://www.swiggy.com/city/sambalpur",
              },
              {
                text: "Banda",
                link: "https://www.swiggy.com/city/banda",
              },
              {
                text: "Hoshiarpur",
                link: "https://www.swiggy.com/city/hoshiarpur",
              },
              {
                text: "Faridkot",
                link: "https://www.swiggy.com/city/faridkot",
              },
              {
                text: "Mandsaur",
                link: "https://www.swiggy.com/city/mandsaur",
              },
              {
                text: "Suryapet",
                link: "https://www.swiggy.com/city/suryapet",
              },
              {
                text: "Adilabad",
                link: "https://www.swiggy.com/city/adilabad",
              },
              {
                text: "Narasaraopet",
                link: "https://www.swiggy.com/city/narasaraopet",
              },
              {
                text: "Faizabad",
                link: "https://www.swiggy.com/city/faizabad",
              },
              {
                text: "Tadpatri",
                link: "https://www.swiggy.com/city/tadpatri",
              },
              {
                text: "Gonda",
                link: "https://www.swiggy.com/city/gonda",
              },
              {
                text: "Mughalsarai",
                link: "https://www.swiggy.com/city/mughalsarai",
              },
              {
                text: "Medinipur",
                link: "https://www.swiggy.com/city/medinipur",
              },
              {
                text: "Nagda",
                link: "https://www.swiggy.com/city/nagda",
              },
              {
                text: "Chilakaluripet",
                link: "https://www.swiggy.com/city/chilakaluripet",
              },
              {
                text: "Hindupur",
                link: "https://www.swiggy.com/city/hindupur",
              },
              {
                text: "Kasganj",
                link: "https://www.swiggy.com/city/kasganj",
              },
              {
                text: "Raiganj",
                link: "https://www.swiggy.com/city/raiganj",
              },
              {
                text: "Deoria City",
                link: "https://www.swiggy.com/city/deoria-city",
              },
              {
                text: "Sultanpur",
                link: "https://www.swiggy.com/city/sultanpur",
              },
              {
                text: "Shamli",
                link: "https://www.swiggy.com/city/shamli",
              },
              {
                text: "Krishnanagar",
                link: "https://www.swiggy.com/city/krishnanagar",
              },
              {
                text: "Ballia",
                link: "https://www.swiggy.com/city/ballia",
              },
              {
                text: "Guntakal",
                link: "https://www.swiggy.com/city/guntakal",
              },
              {
                text: "Miryalaguda",
                link: "https://www.swiggy.com/city/miryalaguda",
              },
              {
                text: "Etah",
                link: "https://www.swiggy.com/city/etah",
              },
              {
                text: "Berhampore",
                link: "https://www.swiggy.com/city/berhampore",
              },
              {
                text: "Gudivada",
                link: "https://www.swiggy.com/city/gudivada",
              },
              {
                text: "Haldia",
                link: "https://www.swiggy.com/city/haldia",
              },
              {
                text: "Santipur",
                link: "https://www.swiggy.com/city/santipur",
              },
              {
                text: "Basirhat",
                link: "https://www.swiggy.com/city/basirhat",
              },
              {
                text: "Seoni",
                link: "https://www.swiggy.com/city/seoni",
              },
              {
                text: "Udgir",
                link: "https://www.swiggy.com/city/udgir",
              },
              {
                text: "Proddatur",
                link: "https://www.swiggy.com/city/proddatur",
              },
              {
                text: "Nagapattinam",
                link: "https://www.swiggy.com/city/nagapattinam",
              },
              {
                text: "Chikmagalur",
                link: "https://www.swiggy.com/city/chikmagalur",
              },
              {
                text: "Chandausi",
                link: "https://www.swiggy.com/city/chandausi",
              },
              {
                text: "Bhind",
                link: "https://www.swiggy.com/city/bhind",
              },
              {
                text: "Mandya",
                link: "https://www.swiggy.com/city/mandya",
              },
              {
                text: "Bagalkot",
                link: "https://www.swiggy.com/city/bagalkot",
              },
              {
                text: "Nandurbar",
                link: "https://www.swiggy.com/city/nandurbar",
              },
              {
                text: "Chitradurga",
                link: "https://www.swiggy.com/city/chitradurga",
              },
              {
                text: "Osmanabad",
                link: "https://www.swiggy.com/city/osmanabad",
              },
              {
                text: "Modinagar",
                link: "https://www.swiggy.com/city/modinagar",
              },
              {
                text: "Gadag-Betigeri",
                link: "https://www.swiggy.com/city/gadag-betigeri",
              },
              {
                text: "Hoshangabad",
                link: "https://www.swiggy.com/city/hoshangabad",
              },
              {
                text: "Jaunpur",
                link: "https://www.swiggy.com/city/jaunpur",
              },
              {
                text: "Khurja",
                link: "https://www.swiggy.com/city/khurja",
              },
              {
                text: "Port Blair",
                link: "https://www.swiggy.com/city/port-blair",
              },
              {
                text: "Jorhat",
                link: "https://www.swiggy.com/city/jorhat",
              },
              {
                text: "Nandyal",
                link: "https://www.swiggy.com/city/nandyal",
              },
              {
                text: "Biharsharif",
                link: "https://www.swiggy.com/city/biharsharif",
              },
              {
                text: "Buxar",
                link: "https://www.swiggy.com/city/buxar",
              },
              {
                text: "Siwan",
                link: "https://www.swiggy.com/city/siwan",
              },
              {
                text: "Dehri",
                link: "https://www.swiggy.com/city/dehri",
              },
              {
                text: "Bettiah",
                link: "https://www.swiggy.com/city/bettiah",
              },
              {
                text: "Kishanganj",
                link: "https://www.swiggy.com/city/kishanganj",
              },
              {
                text: "Saharsa",
                link: "https://www.swiggy.com/city/saharsa",
              },
              {
                text: "Hajipur",
                link: "https://www.swiggy.com/city/hajipur",
              },
              {
                text: "Motihari",
                link: "https://www.swiggy.com/city/motihari",
              },
              {
                text: "Sasaram",
                link: "https://www.swiggy.com/city/sasaram",
              },
              {
                text: "Munger",
                link: "https://www.swiggy.com/city/munger",
              },
              {
                text: "Katihar",
                link: "https://www.swiggy.com/city/katihar",
              },
              {
                text: "Arrah",
                link: "https://www.swiggy.com/city/arrah",
              },
              {
                text: "Srikakulam",
                link: "https://www.swiggy.com/city/srikakulam",
              },
              {
                text: "Begusarai",
                link: "https://www.swiggy.com/city/begusarai",
              },
              {
                text: "Neyveli",
                link: "https://www.swiggy.com/city/neyveli",
              },
              {
                text: "Waidhan",
                link: "https://www.swiggy.com/city/waidhan",
              },
              {
                text: "Markapur",
                link: "https://www.swiggy.com/city/markapur",
              },
              {
                text: "Chikkaballapur",
                link: "https://www.swiggy.com/city/chikkaballapur",
              },
              {
                text: "Bhatkal",
                link: "https://www.swiggy.com/city/bhatkal",
              },
              {
                text: "Gokak",
                link: "https://www.swiggy.com/city/gokak",
              },
              {
                text: "Itarsi",
                link: "https://www.swiggy.com/city/itarsi",
              },
              {
                text: "Dabra",
                link: "https://www.swiggy.com/city/dabra",
              },
              {
                text: "Dhar",
                link: "https://www.swiggy.com/city/dhar",
              },
              {
                text: "Chalisgaon",
                link: "https://www.swiggy.com/city/chalisgaon",
              },
              {
                text: "Thiruvallur",
                link: "https://www.swiggy.com/city/thiruvallur",
              },
              {
                text: "Namakkal",
                link: "https://www.swiggy.com/city/namakkal",
              },
              {
                text: "Dharmapuri",
                link: "https://www.swiggy.com/city/dharmapuri",
              },
              {
                text: "Bhandara",
                link: "https://www.swiggy.com/city/bhandara",
              },
              {
                text: "Virudhunagar",
                link: "https://www.swiggy.com/city/virudhunagar",
              },
              {
                text: "Siddipet",
                link: "https://www.swiggy.com/city/siddipet",
              },
              {
                text: "Gadwal",
                link: "https://www.swiggy.com/city/gadwal",
              },
              {
                text: "Bodhan-Rural",
                link: "https://www.swiggy.com/city/bodhan-rural",
              },
              {
                text: "Kamareddy",
                link: "https://www.swiggy.com/city/kamareddy",
              },
              {
                text: "Jhunjhunu",
                link: "https://www.swiggy.com/city/jhunjhunu",
              },
              {
                text: "Kapurthala",
                link: "https://www.swiggy.com/city/kapurthala",
              },
              {
                text: "Sangrur",
                link: "https://www.swiggy.com/city/sangrur",
              },
              {
                text: "Gurdaspur",
                link: "https://www.swiggy.com/city/gurdaspur",
              },
              {
                text: "Ramgarh",
                link: "https://www.swiggy.com/city/ramgarh",
              },
              {
                text: "Bantwal",
                link: "https://www.swiggy.com/city/bantwal",
              },
              {
                text: "Doddaballapura",
                link: "https://www.swiggy.com/city/doddaballapura",
              },
              {
                text: "Buldana",
                link: "https://www.swiggy.com/city/buldana",
              },
              {
                text: "Karad",
                link: "https://www.swiggy.com/city/karad",
              },
              {
                text: "Krishnagiri",
                link: "https://www.swiggy.com/city/krishnagiri",
              },
              {
                text: "Tiptur",
                link: "https://www.swiggy.com/city/tiptur",
              },
              {
                text: "Bhadrachalam",
                link: "https://www.swiggy.com/city/bhadrachalam",
              },
              {
                text: "Mancherial",
                link: "https://www.swiggy.com/city/mancherial",
              },
              {
                text: "Balrampur",
                link: "https://www.swiggy.com/city/balrampur",
              },
              {
                text: "Bharabanki",
                link: "https://www.swiggy.com/city/bharabanki",
              },
              {
                text: "Malout",
                link: "https://www.swiggy.com/city/malout",
              },
              {
                text: "Fatehgarh Sahib",
                link: "https://www.swiggy.com/city/fatehgarh-sahib",
              },
              {
                text: "Ropar",
                link: "https://www.swiggy.com/city/ropar",
              },
              {
                text: "Nangal",
                link: "https://www.swiggy.com/city/nangal",
              },
              {
                text: "Narnaul",
                link: "https://www.swiggy.com/city/narnaul",
              },
              {
                text: "Naraingarh",
                link: "https://www.swiggy.com/city/naraingarh",
              },
              {
                text: "Himmatnagar",
                link: "https://www.swiggy.com/city/himmatnagar",
              },
              {
                text: "Dausa",
                link: "https://www.swiggy.com/city/dausa",
              },
              {
                text: "Jahanabad",
                link: "https://www.swiggy.com/city/jahanabad",
              },
              {
                text: "Samastipur",
                link: "https://www.swiggy.com/city/samastipur",
              },
              {
                text: "Purnea",
                link: "https://www.swiggy.com/city/purnea",
              },
              {
                text: "Berhampur",
                link: "https://www.swiggy.com/city/berhampur",
              },
              {
                text: "Malda",
                link: "https://www.swiggy.com/city/malda",
              },
              {
                text: "Tuni",
                link: "https://www.swiggy.com/city/tuni",
              },
              {
                text: "Puttur",
                link: "https://www.swiggy.com/city/puttur",
              },
              {
                text: "Rayachoty",
                link: "https://www.swiggy.com/city/rayachoty",
              },
              {
                text: "Medak",
                link: "https://www.swiggy.com/city/medak",
              },
              {
                text: "Nirmal",
                link: "https://www.swiggy.com/city/nirmal",
              },
              {
                text: "Mirzapur",
                link: "https://www.swiggy.com/city/mirzapur",
              },
              {
                text: "Tanuku",
                link: "https://www.swiggy.com/city/tanuku",
              },
              {
                text: "Dahod",
                link: "https://www.swiggy.com/city/dahod",
              },
              {
                text: "Barmer",
                link: "https://www.swiggy.com/city/barmer",
              },
              {
                text: "Gangapur City",
                link: "https://www.swiggy.com/city/gangapur-city",
              },
              {
                text: "Mandi Gobindgarh",
                link: "https://www.swiggy.com/city/mandi-gobindgarh",
              },
              {
                text: "Tarn Taran Sahib",
                link: "https://www.swiggy.com/city/tarn-taran-sahib",
              },
              {
                text: "Nakodar",
                link: "https://www.swiggy.com/city/nakodar",
              },
              {
                text: "Ankleshwar",
                link: "https://www.swiggy.com/city/ankleshwar",
              },
              {
                text: "Vyara",
                link: "https://www.swiggy.com/city/vyara",
              },
              {
                text: "Bardoli",
                link: "https://www.swiggy.com/city/bardoli",
              },
              {
                text: "Halol",
                link: "https://www.swiggy.com/city/halol",
              },
              {
                text: "Bijnor",
                link: "https://www.swiggy.com/city/bijnor",
              },
              {
                text: "Sawantwadi",
                link: "https://www.swiggy.com/city/sawantwadi",
              },
              {
                text: "Shrirampur",
                link: "https://www.swiggy.com/city/shrirampur",
              },
              {
                text: "Sangamner",
                link: "https://www.swiggy.com/city/sangamner",
              },
              {
                text: "Baramati",
                link: "https://www.swiggy.com/city/baramati",
              },
              {
                text: "Betul",
                link: "https://www.swiggy.com/city/betul",
              },
              {
                text: "Chhatarpur",
                link: "https://www.swiggy.com/city/chhatarpur",
              },
              {
                text: "Datia",
                link: "https://www.swiggy.com/city/datia",
              },
              {
                text: "Balaghat",
                link: "https://www.swiggy.com/city/balaghat",
              },
              {
                text: "Sivakasi",
                link: "https://www.swiggy.com/city/sivakasi",
              },
              {
                text: "Viluppuram",
                link: "https://www.swiggy.com/city/viluppuram",
              },
              {
                text: "Ramanathapuram",
                link: "https://www.swiggy.com/city/ramanathapuram",
              },
              {
                text: "Sirsi",
                link: "https://www.swiggy.com/city/sirsi",
              },
              {
                text: "Kodaikanal",
                link: "https://www.swiggy.com/city/kodaikanal",
              },
              {
                text: "Theni",
                link: "https://www.swiggy.com/city/theni",
              },
              {
                text: "Karur",
                link: "https://www.swiggy.com/city/karur",
              },
              {
                text: "Karwar",
                link: "https://www.swiggy.com/city/karwar",
              },
              {
                text: "Sindhanur",
                link: "https://www.swiggy.com/city/sindhanur",
              },
              {
                text: "Kannur",
                link: "https://www.swiggy.com/city/kannur",
              },
              {
                text: "Noida 1",
                link: "https://www.swiggy.com/city/noida-1",
              },
              {
                text: "Karunagappaly",
                link: "https://www.swiggy.com/city/karunagappaly",
              },
              {
                text: "Thiruvalla",
                link: "https://www.swiggy.com/city/thiruvalla",
              },
              {
                text: "Thodupuzha",
                link: "https://www.swiggy.com/city/thodupuzha",
              },
              {
                text: "Kadiri",
                link: "https://www.swiggy.com/city/kadiri",
              },
              {
                text: "Kavali",
                link: "https://www.swiggy.com/city/kavali",
              },
              {
                text: "Tezpur",
                link: "https://www.swiggy.com/city/tezpur",
              },
              {
                text: "Kayamkulam",
                link: "https://www.swiggy.com/city/kayamkulam",
              },
              {
                text: "Kottarakkara",
                link: "https://www.swiggy.com/city/kottarakkara",
              },
              {
                text: "Mandi Dabwali",
                link: "https://www.swiggy.com/city/mandi-dabwali",
              },
              {
                text: "Fatehabad",
                link: "https://www.swiggy.com/city/fatehabad",
              },
              {
                text: "Jagraon",
                link: "https://www.swiggy.com/city/jagraon",
              },
              {
                text: "Mansa",
                link: "https://www.swiggy.com/city/mansa",
              },
              {
                text: "Pinjore City",
                link: "https://www.swiggy.com/city/pinjore-city",
              },
              {
                text: "Fazilka",
                link: "https://www.swiggy.com/city/fazilka",
              },
              {
                text: "Baddi",
                link: "https://www.swiggy.com/city/baddi",
              },
              {
                text: "Solan",
                link: "https://www.swiggy.com/city/solan",
              },
              {
                text: "Daltonganj",
                link: "https://www.swiggy.com/city/daltonganj",
              },
              {
                text: "Balangir",
                link: "https://www.swiggy.com/city/balangir",
              },
              {
                text: "Paonta Sahib",
                link: "https://www.swiggy.com/city/paonta-sahib",
              },
              {
                text: "Kothagudem",
                link: "https://www.swiggy.com/city/kothagudem",
              },
              {
                text: "Hansi",
                link: "https://www.swiggy.com/city/hansi",
              },
              {
                text: "Aurangabad_Bihar",
                link: "https://www.swiggy.com/city/aurangabadbihar",
              },
              {
                text: "Charkhi Dadri",
                link: "https://www.swiggy.com/city/charkhi-dadri",
              },
              {
                text: "Gopalganj",
                link: "https://www.swiggy.com/city/gopalganj",
              },
              {
                text: "Jharsuguda",
                link: "https://www.swiggy.com/city/jharsuguda",
              },
              {
                text: "Tohana",
                link: "https://www.swiggy.com/city/tohana",
              },
              {
                text: "Jhalawar",
                link: "https://www.swiggy.com/city/jhalawar",
              },
              {
                text: "Sivasagar",
                link: "https://www.swiggy.com/city/sivasagar",
              },
              {
                text: "Bagdogra",
                link: "https://www.swiggy.com/city/bagdogra",
              },
              {
                text: "Angul",
                link: "https://www.swiggy.com/city/angul",
              },
              {
                text: "Kendrapada",
                link: "https://www.swiggy.com/city/kendrapada",
              },
              {
                text: "Mallapuram (Do not Use)",
                link: "https://www.swiggy.com/city/mallapuram-do-not-use",
              },
              {
                text: "Veraval",
                link: "https://www.swiggy.com/city/veraval",
              },
              {
                text: "Daman",
                link: "https://www.swiggy.com/city/daman",
              },
              {
                text: "Chiplun",
                link: "https://www.swiggy.com/city/chiplun",
              },
              {
                text: "Silvassa",
                link: "https://www.swiggy.com/city/silvassa",
              },
              {
                text: "Bapatla&Chirala",
                link: "https://www.swiggy.com/city/bapatla-and-chirala",
              },
              {
                text: "Lonavla",
                link: "https://www.swiggy.com/city/lonavla",
              },
              {
                text: "Bongaigaon",
                link: "https://www.swiggy.com/city/bongaigaon",
              },
              {
                text: "Golaghat",
                link: "https://www.swiggy.com/city/golaghat",
              },
              {
                text: "Duliajan",
                link: "https://www.swiggy.com/city/duliajan",
              },
              {
                text: "Ramnagar",
                link: "https://www.swiggy.com/city/ramnagar",
              },
              {
                text: "Bolpur",
                link: "https://www.swiggy.com/city/bolpur",
              },
              {
                text: "Madhubani",
                link: "https://www.swiggy.com/city/madhubani",
              },
              {
                text: "Balasore",
                link: "https://www.swiggy.com/city/balasore",
              },
              {
                text: "Palampur",
                link: "https://www.swiggy.com/city/palampur",
              },
              {
                text: "Kotdwar",
                link: "https://www.swiggy.com/city/kotdwar",
              },
              {
                text: "Koppal",
                link: "https://www.swiggy.com/city/koppal",
              },
              {
                text: "Chikhli",
                link: "https://www.swiggy.com/city/chikhli",
              },
              {
                text: "Dahanu",
                link: "https://www.swiggy.com/city/dahanu",
              },
              {
                text: "Itanagar",
                link: "https://www.swiggy.com/city/itanagar",
              },
              {
                text: "Rangpo",
                link: "https://www.swiggy.com/city/rangpo",
              },
              {
                text: "Aizawl",
                link: "https://www.swiggy.com/city/aizawl",
              },
              {
                text: "Gangtok",
                link: "https://www.swiggy.com/city/gangtok",
              },
              {
                text: "Mayiladuthurai",
                link: "https://www.swiggy.com/city/mayiladuthurai",
              },
              {
                text: "Kannauj",
                link: "https://www.swiggy.com/city/kannauj",
              },
              {
                text: "Cooch Behar",
                link: "https://www.swiggy.com/city/cooch-behar",
              },
              {
                text: "Jaigaon",
                link: "https://www.swiggy.com/city/jaigaon",
              },
              {
                text: "Palani",
                link: "https://www.swiggy.com/city/palani",
              },
              {
                text: "Bilimora",
                link: "https://www.swiggy.com/city/bilimora",
              },
              {
                text: "Udhampur",
                link: "https://www.swiggy.com/city/udhampur",
              },
              {
                text: "Boisar",
                link: "https://www.swiggy.com/city/boisar",
              },
              {
                text: "Kohima",
                link: "https://www.swiggy.com/city/kohima",
              },
              {
                text: "Naharlagun",
                link: "https://www.swiggy.com/city/naharlagun",
              },
              {
                text: "Dumka",
                link: "https://www.swiggy.com/city/dumka",
              },
              {
                text: "Rajsamand",
                link: "https://www.swiggy.com/city/rajsamand",
              },
              {
                text: "Gauriganj",
                link: "https://www.swiggy.com/city/gauriganj",
              },
              {
                text: "Bodinayakanur",
                link: "https://www.swiggy.com/city/bodinayakanur",
              },
              {
                text: "Bhawanipatna",
                link: "https://www.swiggy.com/city/bhawanipatna",
              },
              {
                text: "Baran",
                link: "https://www.swiggy.com/city/baran",
              },
              {
                text: "Narsinghpur",
                link: "https://www.swiggy.com/city/narsinghpur",
              },
              {
                text: "Uran Islampur",
                link: "https://www.swiggy.com/city/uran-islampur",
              },
              {
                text: "Kovilpatti",
                link: "https://www.swiggy.com/city/kovilpatti",
              },
              {
                text: "Kasaragod",
                link: "https://www.swiggy.com/city/kasaragod",
              },
              {
                text: "Pusad",
                link: "https://www.swiggy.com/city/pusad",
              },
              {
                text: "Kendujhar",
                link: "https://www.swiggy.com/city/kendujhar",
              },
              {
                text: "Manali",
                link: "https://www.swiggy.com/city/manali",
              },
              {
                text: "Diu",
                link: "https://www.swiggy.com/city/diu",
              },
              {
                text: "Khamgaon",
                link: "https://www.swiggy.com/city/khamgaon",
              },
              {
                text: "Ramanagara",
                link: "https://www.swiggy.com/city/ramanagara",
              },
              {
                text: "Alipurduar",
                link: "https://www.swiggy.com/city/alipurduar",
              },
              {
                text: "Almora",
                link: "https://www.swiggy.com/city/almora",
              },
              {
                text: "Jhargram",
                link: "https://www.swiggy.com/city/jhargram",
              },
              {
                text: "Arambagh",
                link: "https://www.swiggy.com/city/arambagh",
              },
              {
                text: "Bhadohi",
                link: "https://www.swiggy.com/city/bhadohi",
              },
              {
                text: "Tenkasi",
                link: "https://www.swiggy.com/city/tenkasi",
              },
              {
                text: "Srivilliputhur",
                link: "https://www.swiggy.com/city/srivilliputhur",
              },
              {
                text: "Chidambaram",
                link: "https://www.swiggy.com/city/chidambaram",
              },
              {
                text: "Rajgarh",
                link: "https://www.swiggy.com/city/rajgarh",
              },
              {
                text: "Pratapgarh",
                link: "https://www.swiggy.com/city/pratapgarh",
              },
              {
                text: "Washim",
                link: "https://www.swiggy.com/city/washim",
              },
              {
                text: "Mandi HP",
                link: "https://www.swiggy.com/city/mandi-hp",
              },
              {
                text: "Ranaghat",
                link: "https://www.swiggy.com/city/ranaghat",
              },
              {
                text: "Raghunathpur",
                link: "https://www.swiggy.com/city/raghunathpur",
              },
              {
                text: "Suri",
                link: "https://www.swiggy.com/city/suri",
              },
              {
                text: "Kadayanallur",
                link: "https://www.swiggy.com/city/kadayanallur",
              },
              {
                text: "Thiruvarur",
                link: "https://www.swiggy.com/city/thiruvarur",
              },
              {
                text: "Ranaghat-WB",
                link: "https://www.swiggy.com/city/ranaghat-wb",
              },
              {
                text: "Idukki",
                link: "https://www.swiggy.com/city/idukki",
              },
              {
                text: "Wayanad",
                link: "https://www.swiggy.com/city/wayanad",
              },
              {
                text: "Perambalur",
                link: "https://www.swiggy.com/city/perambalur",
              },
              {
                text: "Paramakudi",
                link: "https://www.swiggy.com/city/paramakudi",
              },
              {
                text: "Khopoli",
                link: "https://www.swiggy.com/city/khopoli",
              },
              {
                text: "Bela Pratapgarh",
                link: "https://www.swiggy.com/city/bela-pratapgarh",
              },
              {
                text: "Mahoba",
                link: "https://www.swiggy.com/city/mahoba",
              },
              {
                text: "Sitamarhi",
                link: "https://www.swiggy.com/city/sitamarhi",
              },
              {
                text: "Chakdaha",
                link: "https://www.swiggy.com/city/chakdaha",
              },
              {
                text: "Khalilabad",
                link: "https://www.swiggy.com/city/khalilabad",
              },
              {
                text: "Pattukkottai",
                link: "https://www.swiggy.com/city/pattukkottai",
              },
              {
                text: "Tindivanam",
                link: "https://www.swiggy.com/city/tindivanam",
              },
              {
                text: "Tiruttani",
                link: "https://www.swiggy.com/city/tiruttani",
              },
              {
                text: "Gangarampur",
                link: "https://www.swiggy.com/city/gangarampur",
              },
              {
                text: "Dharapuram",
                link: "https://www.swiggy.com/city/dharapuram",
              },
              {
                text: "Arakkonam",
                link: "https://www.swiggy.com/city/arakkonam",
              },
              {
                text: "Sirkali",
                link: "https://www.swiggy.com/city/sirkali",
              },
              {
                text: "Aruppukottai",
                link: "https://www.swiggy.com/city/aruppukottai",
              },
              {
                text: "Mettupalayam",
                link: "https://www.swiggy.com/city/mettupalayam",
              },
              {
                text: "Digboi",
                link: "https://www.swiggy.com/city/digboi",
              },
              {
                text: "Biswanath Chariali",
                link: "https://www.swiggy.com/city/biswanath-chariali",
              },
              {
                text: "Nalbari",
                link: "https://www.swiggy.com/city/nalbari",
              },
              {
                text: "Shirdi city",
                link: "https://www.swiggy.com/city/shirdi-city",
              },
              {
                text: "Mukerian",
                link: "https://www.swiggy.com/city/mukerian",
              },
              {
                text: "Hosur",
                link: "https://www.swiggy.com/city/hosur",
              },
              {
                text: "Palakollu",
                link: "https://www.swiggy.com/city/palakollu",
              },
              {
                text: "Amalapuram",
                link: "https://www.swiggy.com/city/amalapuram",
              },
              {
                text: "Ravulapalem",
                link: "https://www.swiggy.com/city/ravulapalem",
              },
              {
                text: "Narsipatnam",
                link: "https://www.swiggy.com/city/narsipatnam",
              },
              {
                text: "Barh",
                link: "https://www.swiggy.com/city/barh",
              },
              {
                text: "Palghar",
                link: "https://www.swiggy.com/city/palghar",
              },
              {
                text: "Shahdol",
                link: "https://www.swiggy.com/city/shahdol",
              },
              {
                text: "Kushalnagar",
                link: "https://www.swiggy.com/city/kushalnagar",
              },
              {
                text: "Dungarpur",
                link: "https://www.swiggy.com/city/dungarpur",
              },
              {
                text: "Chaibasa",
                link: "https://www.swiggy.com/city/chaibasa",
              },
              {
                text: "Haveri",
                link: "https://www.swiggy.com/city/haveri",
              },
              {
                text: "Karaikal",
                link: "https://www.swiggy.com/city/karaikal",
              },
              {
                text: "Jjajjar",
                link: "https://www.swiggy.com/city/jjajjar",
              },
              {
                text: "Kokrajhar",
                link: "https://www.swiggy.com/city/kokrajhar",
              },
              {
                text: "Rangia",
                link: "https://www.swiggy.com/city/rangia",
              },
              {
                text: "Hamirpur",
                link: "https://www.swiggy.com/city/hamirpur",
              },
              {
                text: "Una",
                link: "https://www.swiggy.com/city/una",
              },
              {
                text: "Sulthan Bathery",
                link: "https://www.swiggy.com/city/sulthan-bathery",
              },
              {
                text: "Rayagada",
                link: "https://www.swiggy.com/city/rayagada",
              },
              {
                text: "Paradeep",
                link: "https://www.swiggy.com/city/paradeep",
              },
              {
                text: "Mandapeta",
                link: "https://www.swiggy.com/city/mandapeta",
              },
              {
                text: "Jamui",
                link: "https://www.swiggy.com/city/jamui",
              },
              {
                text: "Pilkhuwa",
                link: "https://www.swiggy.com/city/pilkhuwa",
              },
              {
                text: "Parvathipuram",
                link: "https://www.swiggy.com/city/parvathipuram",
              },
              {
                text: "Ambajogai",
                link: "https://www.swiggy.com/city/ambajogai",
              },
              {
                text: "Araria",
                link: "https://www.swiggy.com/city/araria",
              },
              {
                text: "North Lakhimpur",
                link: "https://www.swiggy.com/city/north-lakhimpur",
              },
              {
                text: "Rajampet",
                link: "https://www.swiggy.com/city/rajampet",
              },
              {
                text: "Udumalaipettai",
                link: "https://www.swiggy.com/city/udumalaipettai",
              },
              {
                text: "Tirupattur",
                link: "https://www.swiggy.com/city/tirupattur",
              },
              {
                text: "Hojai",
                link: "https://www.swiggy.com/city/hojai",
              },
              {
                text: "Khagaria",
                link: "https://www.swiggy.com/city/khagaria",
              },
              {
                text: "Dasuya",
                link: "https://www.swiggy.com/city/dasuya",
              },
              {
                text: "Gudur",
                link: "https://www.swiggy.com/city/gudur",
              },
              {
                text: "Sullurpeta",
                link: "https://www.swiggy.com/city/sullurpeta",
              },
              {
                text: "Piler",
                link: "https://www.swiggy.com/city/piler",
              },
              {
                text: "SankaranKoil",
                link: "https://www.swiggy.com/city/sankarankoil",
              },
              {
                text: "Nabha",
                link: "https://www.swiggy.com/city/nabha",
              },
              {
                text: "LPU - Phagwara",
                link: "https://www.swiggy.com/city/lpu-phagwara",
              },
              {
                text: "Jangipur",
                link: "https://www.swiggy.com/city/jangipur",
              },
              {
                text: "Roha",
                link: "https://www.swiggy.com/city/roha",
              },
              {
                text: "Maharajganj",
                link: "https://www.swiggy.com/city/maharajganj",
              },
              {
                text: "Kallakurichi",
                link: "https://www.swiggy.com/city/kallakurichi",
              },
              {
                text: "Kalimpong",
                link: "https://www.swiggy.com/city/kalimpong",
              },
              {
                text: "Sundernagar",
                link: "https://www.swiggy.com/city/sundernagar",
              },
              {
                text: "Nawada",
                link: "https://www.swiggy.com/city/nawada",
              },
              {
                text: "Forbesganj",
                link: "https://www.swiggy.com/city/forbesganj",
              },
              {
                text: "Mokameh Khas",
                link: "https://www.swiggy.com/city/mokameh-khas",
              },
              {
                text: "Bazpur",
                link: "https://www.swiggy.com/city/bazpur",
              },
              {
                text: "Lakhisarai",
                link: "https://www.swiggy.com/city/lakhisarai",
              },
              {
                text: "Rameswaram",
                link: "https://www.swiggy.com/city/rameswaram",
              },
              {
                text: "Sahjanwa",
                link: "https://www.swiggy.com/city/sahjanwa",
              },
              {
                text: "Siddharthnagar",
                link: "https://www.swiggy.com/city/siddharthnagar",
              },
              {
                text: "Nanjangud",
                link: "https://www.swiggy.com/city/nanjangud",
              },
              {
                text: "Chamarajanagar",
                link: "https://www.swiggy.com/city/chamarajanagar",
              },
              {
                text: "Kurali",
                link: "https://www.swiggy.com/city/kurali",
              },
              {
                text: "Sundar Nagar",
                link: "https://www.swiggy.com/city/sundar-nagar",
              },
              {
                text: "Bobbili",
                link: "https://www.swiggy.com/city/bobbili",
              },
              {
                text: "Jangaon",
                link: "https://www.swiggy.com/city/jangaon",
              },
              {
                text: "Banswara",
                link: "https://www.swiggy.com/city/banswara",
              },
              {
                text: "Sundergarh",
                link: "https://www.swiggy.com/city/sundergarh",
              },
              {
                text: "Godda",
                link: "https://www.swiggy.com/city/godda",
              },
              {
                text: "Madhupur",
                link: "https://www.swiggy.com/city/madhupur",
              },
              {
                text: "Katwa",
                link: "https://www.swiggy.com/city/katwa",
              },
              {
                text: "Dhupguri",
                link: "https://www.swiggy.com/city/dhupguri",
              },
              {
                text: "Contai",
                link: "https://www.swiggy.com/city/contai",
              },
              {
                text: "Baramulla",
                link: "https://www.swiggy.com/city/baramulla",
              },
              {
                text: "Kangeyam",
                link: "https://www.swiggy.com/city/kangeyam",
              },
              {
                text: "Naugachia",
                link: "https://www.swiggy.com/city/naugachia",
              },
              {
                text: "Madhepura",
                link: "https://www.swiggy.com/city/madhepura",
              },
              {
                text: "Jamkhambhaliya",
                link: "https://www.swiggy.com/city/jamkhambhaliya",
              },
              {
                text: "Mundra",
                link: "https://www.swiggy.com/city/mundra",
              },
              {
                text: "Patan",
                link: "https://www.swiggy.com/city/patan",
              },
              {
                text: "Mahuva",
                link: "https://www.swiggy.com/city/mahuva",
              },
              {
                text: "Attur",
                link: "https://www.swiggy.com/city/attur",
              },
              {
                text: "Pen",
                link: "https://www.swiggy.com/city/pen",
              },
              {
                text: "Mandla",
                link: "https://www.swiggy.com/city/mandla",
              },
              {
                text: "Sidhi",
                link: "https://www.swiggy.com/city/sidhi",
              },
              {
                text: "Lakshadweep",
                link: "https://www.swiggy.com/city/lakshadweep",
              },
              {
                text: "Chitrakoot",
                link: "https://www.swiggy.com/city/chitrakoot",
              },
              {
                text: "Rajam",
                link: "https://www.swiggy.com/city/rajam",
              },
              {
                text: "Nippani",
                link: "https://www.swiggy.com/city/nippani",
              },
              {
                text: "Sankeshwar",
                link: "https://www.swiggy.com/city/sankeshwar",
              },
              {
                text: "Chikkodi",
                link: "https://www.swiggy.com/city/chikkodi",
              },
              {
                text: "Modasa",
                link: "https://www.swiggy.com/city/modasa",
              },
              {
                text: "Bavla",
                link: "https://www.swiggy.com/city/bavla",
              },
              {
                text: "Puttur_AP",
                link: "https://www.swiggy.com/city/puttur-ap",
              },
              {
                text: "Sinnar",
                link: "https://www.swiggy.com/city/sinnar",
              },
              {
                text: "singur",
                link: "https://www.swiggy.com/city/singur",
              },
              {
                text: "Nelamangala",
                link: "https://www.swiggy.com/city/nelamangala",
              },
              {
                text: "Srinagar Uttarakhand",
                link: "https://www.swiggy.com/city/srinagar-uttarakhand",
              },
              {
                text: "Dhampur",
                link: "https://www.swiggy.com/city/dhampur",
              },
            ],
            id: "footer_content",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
            citySlug: "bangalore",
            lat: "12.9351929",
            lng: "77.62448069999999",
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
            gandalfRequest:
              '{"sortAttribute":"relevance","isFiltered":false,"queryId":"seo-data-66d2f24b-97b4-4699-b4d7-be1dd848623d","seoParams":{"apiName":"FoodHomePage","brandId":"","seoUrl":"www.swiggy.com","pageType":"FOOD_HOME_PAGE","businessLine":"FOOD"}}',
            id: "meta_data",
            metaInfo: {
              pageType: "FOOD_HOME_PAGE",
              pageTitle:
                "Order Food Online from India's Best Food Delivery Service | Swiggy",
              pageMetaDescription:
                "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
              pageKeywords:
                "Food delivery, Online food order, Online food dleivery",
            },
            screenType: "filteredCollection",
            seoParams: {
              apiName: "FoodHomePage",
              seoUrl: "www.swiggy.com",
              pageType: "FOOD_HOME_PAGE",
              businessLine: "FOOD",
            },
            pageContext: {
              citySlug: "bangalore",
              cityName: "Bangalore",
              pageType: "FOOD_HOME_PAGE",
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    cacheExpiryTime: 240,
    nextFetch: 1,
  },
  tid: "4f5ed6d2-4682-4afc-922d-9db4dfbe4a80",
  sid: "huz73a14-b6b4-45bb-bd32-0192b5f8a4b8",
  deviceId: "275e9190-ce02-d960-0036-86e9b6165660",
  csrfToken: "iT2fNfCKJvBt-wuZpNF1XWs4ELdwkkQoLbiQYF0A",
};

app.use(
  cors({
    //origin: "https://codeconnectclient.onrender.com",
    origin: "*",
    credentials: true,
  })
);

app.get("/api/restaurants/list", async (req, res) => {
  res.json({ resList });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is successfully listening on port 5000...");
});
