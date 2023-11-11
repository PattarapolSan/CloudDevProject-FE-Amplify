'use client';
import React from 'react'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { COLORS, PATH} from '@/constants'
import { useState } from 'react'
import ConfirmDialog from '../Dialog/confirmDialog'
import { clearSessionToken } from '@/utils/sessionStorage';
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);

  const logoutHandler = () => {
    clearSessionToken();
    router.push(PATH.LOGIN);
  };

  return (
    <>
    <Button
        variant="outlined"
        endIcon={<FontAwesomeIcon icon={faArrowRightFromBracket} size='xs'/>}
        sx={{
            width: "190px",
            height: "40px",
            backgroundColor: COLORS.WHITE, 
            color: COLORS.DANGER,
            borderColor: COLORS.DANGER,
            '&:focus': {
                backgroundColor: COLORS.WHITE,
                color: COLORS.DANGER,
                borderColor: COLORS.DANGER,
            },
            '&:hover': {
                border: `2px solid ${COLORS.DANGER}`,
                backgroundColor: COLORS.WHITE,
            },

        }}
        onClick = {()=>{setOpenConfirmModal(true)}}
    >
        LOGOUT
    </Button>
    <ConfirmDialog
        open={openConfirmModal}
        onClose={()=>{setOpenConfirmModal(false)}}
        onConfirm={logoutHandler}
        onCancel={()=>{setOpenConfirmModal(false)}}
        message={'Are you sure you want to logout?'}
        confirmColor={COLORS.DANGER}
    />
    </>
  )
}

export default LogoutButton