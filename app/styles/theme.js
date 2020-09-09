import { Dimensions } from "react-native";

export default {
    Light:{
        PRIMARY_YELLOW: 'rgb(255,225,148)',
        RED:'rgb(255, 118, 118)',
        TEXT : 'rgb(0, 0, 0)',
        PRIMARY_CREAM : 'rgb(255, 244, 217)',
        BG_WHITE: 'rgb(255,255,255)',
    },

    MAIN_CONTAINER_PADDING:16,
    FONT_SIZE_XSMALL: 8,
    FONT_SIZE_SMALL: 12,
    FONT_SIZE_MEDIUM: 14,
    FONT_SIZE_LARGE: 16,
    FONT_SIZE_XLARGE:18,

    FONT_WEIGHT_LIGHT: '200',
    FONT_WEIGHT_MEDIUM: '600',
    FONT_WEIGHT_HEAVY: '800',

    DEVICE_HEIGHT: Dimensions.get('screen').height,
    DEVICE_WIDTH: Dimensions.get('screen').width,

    FONT_REGULAR : 'Montserrat-Regular',
    FONT_BOLD: 'Montserrat-Bold',

    WHITE : 'rgb(255,255,255)',


}