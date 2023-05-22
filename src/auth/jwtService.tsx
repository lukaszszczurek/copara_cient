import React from 'react';

export function saveJwtToken(token: string) {
    localStorage.setItem('jwtToken', token);
}

