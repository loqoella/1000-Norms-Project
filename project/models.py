from django.db import models

# Create your models here.

gender = (
    ('male','male'),
    ('female','female'),
)

evaluation = (
    ('Weak','Weak'),
    ('Normal','Normal'),
    ('Strong','Strong'),
)

class User(models.Model):

    uid = models.AutoField(primary_key=True)
    username = models.CharField(max_length=128)
    password = models.CharField(max_length=256)
    #sex = models.CharField(max_length=32,choices=gender, default='male')
    email = models.EmailField(unique=True, default='123@123.com')
    c_time = models.DateTimeField(auto_now_add=True)
 
    def __str__(self):
        return self.email

class IMS (models.Model):

    age_group = models.IntegerField(default=0)
    sex = models.CharField(max_length=32,choices=gender, default='male')

    gs_mean = models.IntegerField(default=0)
    apfs_mean = models.IntegerField(default=0)
    ads_mean = models.IntegerField(default=0)
    kfs_mean = models.IntegerField(default=0)
    kes_mean = models.IntegerField(default=0)
    has_mean = models.IntegerField(default=0)
    hers_mean = models.IntegerField(default=0)
    hirs_mean = models.IntegerField(default=0)
    efs_mean = models.IntegerField(default=0)
    ees_mean = models.IntegerField(default=0)
    sers_mean = models.IntegerField(default=0)
    sirs_mean = models.IntegerField(default=0)

    gs_sd = models.IntegerField(default=0)
    apfs_sd = models.IntegerField(default=0)
    ads_sd = models.IntegerField(default=0)
    kfs_sd = models.IntegerField(default=0)
    kes_sd = models.IntegerField(default=0)
    has_sd = models.IntegerField(default=0)
    hers_sd = models.IntegerField(default=0)
    hirs_sd = models.IntegerField(default=0)
    efs_sd = models.IntegerField(default=0)
    ees_sd = models.IntegerField(default=0)
    sers_sd = models.IntegerField(default=0)
    sirs_sd = models.IntegerField(default=0)

    def __str__(self):
        return str(self.sex)+' '+str(self.age_group)

class History_IMS (models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)

    sex = models.CharField(max_length=32,choices=gender, default='male')
    age = models.IntegerField(default=0)

    gs = models.IntegerField(default=0)
    apfs = models.IntegerField(default=0)
    ads = models.IntegerField(default=0)
    kfs = models.IntegerField(default=0)
    kes = models.IntegerField(default=0)
    has = models.IntegerField(default=0)
    hers = models.IntegerField(default=0)
    hirs = models.IntegerField(default=0)
    efs = models.IntegerField(default=0)
    ees = models.IntegerField(default=0)
    sers = models.IntegerField(default=0)
    sirs = models.IntegerField(default=0)

    gs_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    apfs_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    ads_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    kfs_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    kes_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    has_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    hers_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    hirs_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    efs_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    ees_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    sers_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    sirs_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')

    c_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.c_time)

class JF (models.Model):

    age_group = models.IntegerField(default=0)
    sex = models.CharField(max_length=32,choices=gender, default='male')

    nf_mean = models.IntegerField(default=0)
    ne_mean = models.IntegerField(default=0)
    kf_mean = models.IntegerField(default=0)
    ke_mean = models.IntegerField(default=0)
    apf_mean = models.IntegerField(default=0)
    ad_mean = models.IntegerField(default=0)
    hf_mean = models.IntegerField(default=0)
    her_mean = models.IntegerField(default=0)
    hir_mean = models.IntegerField(default=0)
    ef_mean = models.IntegerField(default=0)
    ee_mean = models.IntegerField(default=0)
    ser_mean = models.IntegerField(default=0)
    sir_mean = models.IntegerField(default=0)

    nf_sd = models.IntegerField(default=0)
    ne_sd = models.IntegerField(default=0)
    kf_sd = models.IntegerField(default=0)
    ke_sd = models.IntegerField(default=0)
    apf_sd = models.IntegerField(default=0)
    ad_sd = models.IntegerField(default=0)
    hf_sd = models.IntegerField(default=0)
    her_sd = models.IntegerField(default=0)
    hir_sd = models.IntegerField(default=0)
    ef_sd = models.IntegerField(default=0)
    ee_sd = models.IntegerField(default=0)
    ser_sd = models.IntegerField(default=0)
    sir_sd = models.IntegerField(default=0)

    def __str__(self):
        return str(self.sex)+' '+str(self.age_group)

class History_JF (models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)

    sex = models.CharField(max_length=32,choices=gender, default='male')
    age = models.IntegerField(default=0)

    nf = models.IntegerField(default=0)
    ne = models.IntegerField(default=0)
    kf = models.IntegerField(default=0)
    ke = models.IntegerField(default=0)
    apf = models.IntegerField(default=0)
    ad = models.IntegerField(default=0)
    hf = models.IntegerField(default=0)
    her = models.IntegerField(default=0)
    hir = models.IntegerField(default=0)
    ef = models.IntegerField(default=0)
    ee = models.IntegerField(default=0)
    ser = models.IntegerField(default=0)
    sir = models.IntegerField(default=0)

    nf_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    ne_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    kf_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    ke_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    apf_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    ad_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    hf_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    her_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    hir_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    ef_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    ee_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    ser_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    sir_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')

    c_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.c_time)

class FP (models.Model):

    age_group = models.IntegerField(default=0)
    sex = models.CharField(max_length=32,choices=gender, default='male')

    fdt_mean = models.IntegerField(default=0)
    hpt9_mean = models.IntegerField(default=0)
    seb_mean = models.IntegerField(default=0)
    lj_mean = models.IntegerField(default=0)
    mwt6_mean = models.IntegerField(default=0)
    vj_mean = models.IntegerField(default=0)
    tst_mean = models.IntegerField(default=0)
    csrt_mean = models.IntegerField(default=0)
    sts_mean = models.IntegerField(default=0)
    botb_mean = models.IntegerField(default=0)

    fdt_sd = models.IntegerField(default=0)
    hpt9_sd = models.IntegerField(default=0)
    seb_sd = models.IntegerField(default=0)
    lj_sd = models.IntegerField(default=0)
    mwt6_sd = models.IntegerField(default=0)
    vj_sd = models.IntegerField(default=0)
    tst_sd = models.IntegerField(default=0)
    csrt_sd = models.IntegerField(default=0)
    sts_sd = models.IntegerField(default=0)
    botb_sd = models.IntegerField(default=0)

    def __str__(self):
        return str(self.sex)+' '+str(self.age_group)

class History_FP (models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)

    sex = models.CharField(max_length=32,choices=gender, default='male')
    age = models.IntegerField(default=0)

    fdt = models.IntegerField(default=0)
    hpt9 = models.IntegerField(default=0)
    seb = models.IntegerField(default=0)
    lj = models.IntegerField(default=0)
    mwt6 = models.IntegerField(default=0)
    vj = models.IntegerField(default=0)
    tst = models.IntegerField(default=0)
    csrt = models.IntegerField(default=0)
    sts = models.IntegerField(default=0)
    botb = models.IntegerField(default=0)

    fdt_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    hpt9_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    seb_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    lj_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    mwt6_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    vj_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    tst_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    csrt_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    sts_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    botb_eval = models.CharField(max_length=32,choices=evaluation, default='Weak')
    
    c_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.c_time)
