<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

if (!function_exists('generateUuid')) {
    /**
     * Generate a UUID.
     *
     * @param int     $digit             Jumlah digit angka unik.
     * @param string  $prefix            Nilai Prefix awal.
     * @param string  $table             Nilai table untuk check unik.
     * @param bool    $randomLastStr     Nilai String random dibelakang.
     * @param int     $lengthStr         Jumlah digit random String dibelakang.
     *
     * @return string|null The generated UUID, or null if the attempt limit is reached.
     */
    function generateUuid($digit, $prefix, $table, $randomLastStr = false, $lengthStr = 2)
    {
        global $usedNumbers;

        if (!isset($usedNumbers)) {
            $usedNumbers = [];
        }

        do {
            if (count($usedNumbers) >= 10000) {
                return null;
            }

            $uniqueNumber = str_pad(mt_rand(1, 99), $digit, STR_PAD_RIGHT);
            $uuid = $prefix . $uniqueNumber;

            if ($randomLastStr) {
                $randomSuffix = strtoupper(preg_replace("/[^A-Za-z]/", '', Str::random($lengthStr)));
                $randomSuffix = str_pad($randomSuffix, $lengthStr, 'X', STR_PAD_RIGHT);
                $randomSuffix = substr($randomSuffix, 0, $lengthStr);
                $uuid .= $randomSuffix;
            }

            $isUsed = DB::table($table)->where('id', $uuid)->exists();
        } while (in_array($uuid, $usedNumbers) || $isUsed);

        $usedNumbers[] = $uuid;

        return $uuid;
    }
}

if (!function_exists('generateUsername')) {
    function generateUsername($email)
    {
        list($mail) = explode('@', $email);

        $counter = 1;
        $username = preg_replace('/[^a-zA-Z0-9]/', '', $mail);
        while (DB::table('users')->where('username', $username)->exists()) {
            $username = $username . $counter;
            $counter++;
        }

        return $username;
    }
}
