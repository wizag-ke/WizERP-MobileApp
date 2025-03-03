import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { OnboardingButton } from '../../components/commonButton';
import { DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/icons';
import { labels } from '../../utils/labels';
import { screenName } from '../../utils/screenNames';
import { H18BlackOne700, H15blackTwo400 } from '../../utils/styledComponents';
import { colors } from '../../utils/theme/colors';
import { flex1, bg_color_white, justifyCenter, alignItemCenter, mv5, textAlignCenter } from '../../utils/theme/commonStyles';

export type successSendPaymentLinkProps = {
    
    }


const SuccessSendPaymentLink = (props: successSendPaymentLinkProps) => {
    const navigation=useNavigation()
    return (
        <View style={[flex1, bg_color_white, justifyCenter, alignItemCenter]}>
            <View style={{ height: 80, width: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.greenOne, marginVertical: 10, borderRadius: 30 }}>
                <CustomIcon name={'checkcircle'} size={25} color={colors.green} type={'AntDesign'} />
            </View>
            <H18BlackOne700 >{labels.paymentLinkSuccessfully}</H18BlackOne700>
            <H15blackTwo400 style={[mv5, textAlignCenter]}>{"Payment link has been send to email"}</H15blackTwo400>
            <View style={styles.bottomButtonsContainer}>
            <OnboardingButton
                width={DevWidth / 1.1}
                title={labels.backToInvoice}
                onChange={()=>navigation.navigate(screenName.AddInvoiceOption as never)}
                backgroundColor={colors.primary}
                color={colors.white}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomButtonsContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 15,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default SuccessSendPaymentLink