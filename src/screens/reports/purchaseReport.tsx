import React, { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import BottomNavBar from '../../components/bottomNavBar';
import { ListSubHeader, TopHeader } from '../../components/commonComponents';
import CustomModal from '../../components/commonModal';
import DashedLine from '../../components/dashedLine';
import { purchaseReportData } from '../../utils/data/reportsData';
import { labels } from '../../utils/labels';
import { BottomWidth, H10primary600, H14blackOne600, H14blackTwo400, H15blackOne600, H16BlackOne700, MainListCard } from '../../utils/styledComponents';
import { colors } from '../../utils/theme/colors';
import { flex1, flexRow, justifyBetween, mh15, mv15, mv5 } from '../../utils/theme/commonStyles';
import { PurchaseReportFilter } from './reportsFilter';

export type PurchaseReportProps = {

}


const PurchaseReport = (props: PurchaseReportProps) => {
    const [openReportFilterModal,setOpenReportFilterModal] = useState(false);
    const openFilterModal = () => {
        setOpenReportFilterModal(true);
    };
    const closeModal = () => {
        setOpenReportFilterModal(false);
    };
    const addSaveBtn =()=>{
        closeModal()
    }
    return (
        <View style={[flex1, { backgroundColor: colors.whiteTwo }]}>
            <View style={mh15}>
                <View style={mv15}>
                    <TopHeader headerText={labels.purchaseReport} searchIcon={true} searchName={'Search' + labels.inventory} searchText={labels.purchaseReport} />
                </View>
                <BottomWidth style={[mv5]} />
                <ScrollView>
                    <View style={{ paddingBottom: '50%' }}>
                        <H16BlackOne700>{labels.purchasesByLast30Days}</H16BlackOne700>
                        <ListSubHeader listName={labels.purchase} totalNumber={'21'} onFilterPress={openFilterModal} />
                        {purchaseReportData.map((data) => {
                            return (
                                <View key={data.id}>
                                    <MainListCard>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ backgroundColor: colors.whiteOne, height: 48, width: 48, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Image source={data.productImg} resizeMode='contain' style={{ height: 30, width: 30 }} />
                                                </View>
                                                <View style={{ alignSelf: 'center', marginHorizontal: 8 }}>
                                                    <H10primary600>{data.code}</H10primary600>
                                                    <H15blackOne600>{data.productName}</H15blackOne600>
                                                </View>
                                            </View>
                                            <View style={{ alignSelf: 'center' }}>
                                                <H14blackOne600 style={{ alignSelf: 'center' }}>{data.price}</H14blackOne600>
                                            </View>
                                        </View>
                                        <View style={{ marginVertical: 10 }}>
                                            <DashedLine height={310} color={colors.greyTwo} dashLength={10} dashGap={5} />
                                        </View>
                                        <View style={[flexRow, justifyBetween]}>
                                            <View style={[flexRow]}>
                                                <H14blackTwo400 style={{ alignSelf: 'center' }}>{labels.purchaseQuantity}</H14blackTwo400>
                                                <H14blackTwo400 style={{ alignSelf: 'center' }}>{data.purchaseQuantity}</H14blackTwo400>
                                            </View>
                                            <View style={[flexRow]}>
                                                <H14blackTwo400 style={{ alignSelf: 'center' }}>{labels.instockQuantity}</H14blackTwo400>
                                                <H14blackTwo400 style={{ alignSelf: 'center' }}>{data.inStock}</H14blackTwo400>
                                            </View>
                                        </View>
                                    </MainListCard>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
            <BottomNavBar />
            <CustomModal children={<PurchaseReportFilter onSave={addSaveBtn} onCancel={closeModal}   />} visible={openReportFilterModal} onClose={closeModal} height={'80%'} />
        </View>
    )
}

export default PurchaseReport