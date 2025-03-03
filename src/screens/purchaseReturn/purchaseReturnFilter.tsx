import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, View } from 'react-native';
import { OnboardingButton } from '../../components/commonButton';
import { CustomTextInputField, CustomerSearchExpanded, ExpandableSection } from '../../components/commonComponents';
import { purchaseData } from '../../utils/data/purchaseData';
import { DevWidth } from '../../utils/device';
import { labels } from '../../utils/labels';
import { BottomWidth } from '../../utils/styledComponents';
import { colors } from '../../utils/theme/colors';
import { alignItemCenter, flex1, flexRow, justifyBetween, mv10 } from '../../utils/theme/commonStyles';
import { ModalTopText } from '../inventory/stockDetails';

export type SettingsComponentsProps = {
    onSave: () => void;
    onCancel: () => void;
};


export const PurchaseReturnFilter = ({ onSave, onCancel }: SettingsComponentsProps) => {
    const [isActiveBtn, setIsActiveBtn] = useState(false);
    const [searchValueProductType, setSearchValueProductType] = useState<string>('');
    const [searchValuePurchaseId, setSearchPurchaseId] = useState<string>('');



    const [noData, setNoData] = useState(false); 

    const handleCancelBtnClick = () => {
        setIsActiveBtn(true);
        onCancel();
    };

    const handleSaveBtnClick = () => {
        setIsActiveBtn(false);
        if (!checkDataExists()) {
            setNoData(true);
        } else {
            setNoData(false);
            onSave();
        }
    };

    const checkDataExists = () => {
        return (
            searchValueProductType.trim() !== '' 
            )
    };
    const formKeys = {
        dueDate: 'dueDate',
    }

    const {
        control,
    } = useForm();

    const purchaseVendor = purchaseData.map(item => item.name);
    const productId = purchaseData.map(item => item.purchaseOrderId);

    const ExpandedDateComponent = () => {
        return (
            <View style={[flexRow, justifyBetween, alignItemCenter]}>
                <CustomTextInputField width={150} name={formKeys.dueDate} control={control} placeholder={labels.selectDate} label={labels.from} showIcon={true} showCalendar={true} iconName='calendar' iconType='Feather' iconSize={16} showStarSymbol={false}/>
                <CustomTextInputField width={150} name={formKeys.dueDate} control={control} placeholder={labels.selectDate} label={labels.to} showIcon={true} showCalendar={true} iconName='calendar' iconType='Feather' iconSize={16} showStarSymbol={false}/>
            </View>
        )
    }

    
    return (
        <View style={[flex1]}>
            <ScrollView>
                <View style={{ paddingBottom: 80 }}>
                    <ModalTopText title={labels.filter} iconPress={() => { } } toggleBtn={()=>{}} />
                    <View style={[mv10]}>
                        <ExpandableSection
                            text={labels.vendor}
                            renderingComponent={
                                <CustomerSearchExpanded
                                    isCheckBoxNeeded={true}
                                    placeholder="Search Vendor"
                                    data={purchaseVendor} 
                                    onChangeText={setSearchValueProductType}
                                    value={searchValueProductType}
                                />
                            }
                        />
                        <BottomWidth style={[mv10]} />

                        <ExpandableSection
                            text={'Debit Notes Id'}
                            renderingComponent={
                                <CustomerSearchExpanded
                                    isCheckBoxNeeded={true}
                                    placeholder="Search Debit Notes Id"
                                    data={productId} 
                                    onChangeText={setSearchPurchaseId}
                                    value={searchValuePurchaseId}
                                />
                            }
                        />
                        <BottomWidth style={[mv10]} />
                        <ExpandableSection
                        text="Due Date"
                        renderingComponent={<ExpandedDateComponent />}
                    />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomButtonsContainer}>
                <OnboardingButton
                    width={DevWidth / 2.3}
                    title={labels.cancel}
                    onChange={handleCancelBtnClick}
                    backgroundColor={isActiveBtn ? colors.primary : colors.greySeven}
                    color={isActiveBtn ? colors.white : colors.blackOne}
                />
                <OnboardingButton
                    width={DevWidth / 2.3}
                    title={labels.apply}
                    onChange={handleSaveBtnClick}
                    backgroundColor={isActiveBtn ? colors.greySeven : colors.primary}
                    color={isActiveBtn ? colors.blackOne : colors.white}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    bottomButtonsContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

