clear
import excel "D:\ktpt\Data.xlsx", sheet("Merge") firstrow
encode Id, gen(id)
xtset id time
destring gdppc felb to, replace force
gen lngdppc = ln(gdppc)
gen lnfelb = ln(felb)
gen lnto = ln(to)
drop if lngdppc ==.
drop if lnfelb ==.
drop if lnto ==.
bys id: gen count = _N
drop if count < 7

sum lngdppc lnfelb gdi pop lnto
corr lngdppc lnfelb gdi pop lnto

reg lngdppc lnfelb gdi pop lnto
est sto OLS
vif
estat ovt
xtreg lngdppc lnfelb gdi pop lnto, re
est sto RE
xttest0
estadd scalar bp_p = r(p)
xtreg lngdppc lnfelb gdi pop lnto, fe
est sto FE
hausman FE RE, sigmamore
estadd scalar hm_p = r(p)

esttab OLS FE RE, mti("OLS" "FEM" "REM") star(* 0.1 ** 0.05 *** 0.001) b(4) se(4) sca(bp_p hm_p) nonum

xtreg lngdppc lnfelb gdi pop lnto, fe
xttest3
xtcsd, pesaran abs
xtserial lngdppc lnfelb gdi pop lnto

xtgls lngdppc lnfelb gdi pop lnto, p(h) c(a) force


