<template>
  <div class="container-fluid px-0">
    <div class="card border-primary mb-4">
      <div class="card-header bg-primary text-white d-flex align-items-center">
        <i class="bi bi-passport me-2"></i>
        <h4 class="card-title mb-0">Visa Application Requirements</h4>
      </div>
      <div class="card-body p-0">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="d-flex align-items-center mb-2">
              <span class="badge bg-primary me-2">1</span>
              <h5 class="mb-0">Passport</h5>
            </div>
            <p class="text-muted text-start">
              <i class="bi bi-file-earmark-text me-2"></i>
              Original passport with at least six months of remaining validity and with more than 2 blank visa pages,
              a photocopy of the passport's data page and the photo page if it is separate.
              <strong>(If applying for multiple entry visa, passport validity should cover visa validity plus duration
                of stay)</strong>
            </p>
          </li>

          <li class="list-group-item">
            <div class="d-flex align-items-center mb-2">
              <span class="badge bg-primary me-2">2</span>
              <h5 class="mb-0">Visa Application Form and Photo</h5>
            </div>
            <p class="text-muted text-start">
              <i class="bi bi-image me-2"></i>
              Complete the Visa Application Form online, upload an electronic photo (check photo rules),
              print and sign the form. Prepare one actual photo (33x48mm, color with white background)
              for in-person submission.
            </p>
          </li>

          <li class="list-group-item">
            <div class="d-flex align-items-center mb-2">
              <span class="badge bg-primary me-2">3</span>
              <h5 class="mb-0">Proof of Legal Status</h5>
            </div>
            <p class="text-muted text-start">
              <i class="bi bi-info-circle me-2"></i>
              For applicants not applying in their country of citizenship:
              Provide original and photocopy of valid certificates of residence, employment,
              student status, or other legal stay documents from local authorities.
            </p>
          </li>

          <li class="list-group-item">
            <div class="d-flex align-items-center mb-2">
              <span class="badge bg-primary me-2">4</span>
              <h5 class="mb-0">Previous Chinese Passport/Visa Documentation</h5>
            </div>
            <div class="text-muted">
              <p class="text-start">
                <i class="bi bi-file-earmark-person me-2"></i>
                For former Chinese citizens with foreign citizenship:
              </p>
              <ul class="ps-4">
                <li class="text-start">First-time applicants: Provide last Chinese passport and its data page photocopy
                </li>
                <li class="text-start">Renewing with new passport: Submit previous passport's data page, photo page, and
                  previous Chinese
                  visa</li>
                <li class="text-start">Name change: Include official name change documentation</li>
              </ul>
            </div>
          </li>

          <li class="list-group-item">
            <div class="d-flex align-items-center mb-2">
              <span class="badge bg-primary me-2">5</span>
              <h5 class="mb-0">Commercial/Trade Fair Invitation Documents</h5>
            </div>
            <div class="text-muted">
              <p class="text-start">
                <i class="bi bi-briefcase me-2"></i>
                Invitation letter must include:
              </p>
              <ul class="list-group ps-4">
                <li class="text-start">Complete applicant information (full name, gender, date of birth)</li>
                <li class="text-start">Detailed visit information:
                  <ul class="item-group">
                    <li class="text-start">Purpose of visit</li>
                    <li class="text-start">Arrival and departure dates</li>
                    <li class="text-start">Places to be visited</li>
                    <li class="text-start">Relationship with inviting party</li>
                    <li class="text-start">Financial support details during stay</li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradeFairVisaSection'
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.badge {
  min-width: 25px;
  text-align: center;
}

ul ul {
  list-style-type: disc;
  color: #6c757d;
}
</style>